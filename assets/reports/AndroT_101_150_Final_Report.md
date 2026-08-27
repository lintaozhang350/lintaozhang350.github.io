# AndroT 101-150: Direct `Log.d` static analysis

## Scope

This review covers the 50 repositories assigned to AndroT IDs 101-150. It searches Java and Kotlin production-looking source for direct `Log.d` calls. Test trees (`src/test`, `src/androidTest`, and `src/sharedTest`), build output, Gradle caches, generated code, and obvious repository metadata are excluded. The scope is deliberately narrow: `Log.e`, `Log.w`, `Log.i`, Timber, `System.out`, and other logging mechanisms are not counted.

ID 120 was analyzed from the original repository snapshot. Its temporary repository-order change was tested in an isolated copy and is documented separately.

## Method

`analyze_logd.py` walks the 50 repository directories without changing them. It records a raw textual count before filtering comments and literals, then creates an active count after masking comments and string/character literals. This removes obvious commented-out calls while keeping line numbers and source paths. For representative cases, the surrounding method, callback, branch, catch block, null check, response code, or return path was read manually. A logger/helper definition was not treated as evidence of a bug state by itself.

## Overall results

| Measure | Result |
|---|---:|
| Assigned repositories | 50 |
| Raw textual `Log.d` matches after source-scope exclusions | 376 |
| Active production `Log.d` contexts | 316 |
| Projects with at least one active production `Log.d` | 22 |
| Projects with no active production `Log.d` | 28 |
| Active plus inactive projects | 50 |

The previous sanity values were 391 raw matches and 317 active-looking contexts. The raw difference is explained by 15 matches in excluded test trees, concentrated in IDs 106, 108, 115, 137, and 146. The active value is one lower because the prior context file included ID 105's `app/src/play/java/com/celzero/bravedns/iab/InAppBillingHandler.kt:145`, which is inside an unclosed `/* ... */` block comment; the current scanner correctly excludes it. The current values are the ones used in the final CSV because they follow the stated scope and were regenerated from source. ID 150 has 13 raw textual matches but zero active production calls; the 13 are commented-out calls.

## Strongest examples

These examples have the clearest connection between the log and a reproducible program state. None is claimed to be a confirmed report of a known bug; the assessment is about reproduction value only.

1. **ID 106, billing failure — `BillingRepository.kt:153`.** `Error purchasing...` runs when the billing response is not `OK` and is not the expected `USER_CANCELED` result. A failed or unavailable billing response could recreate this state.
2. **ID 107, missing image file — `SaveOeuvre.kt:42`.** `File does not exits` is inside `if (!imageFile.exists())`. A setup where the temporary image file does not exist gives a concrete reproduction state.
3. **ID 108, HTML processing exception — `HtmlTagHandler.java:77`.** `Exception: ...` is inside `catch (Exception e)` while processing tag attributes. Malformed or unexpected HTML can drive that path, although the broad catch loses detail.
4. **ID 115, backup authentication — `BackupService.kt:53` (and the parallel path at line 84).** `Authentication failed...` runs when authentication returns `false` and the operation returns. An unauthenticated or rejected caller provides a concrete failure state.
5. **ID 120, location providers disabled — `GPSTracker.java:53`.** `No provider enabled` runs exactly when `!isGPSEnabled && !isNetworkEnabled`. The compatibility APK reproduced this log twice on the Pixel_5 emulator after location services were disabled.
6. **ID 129, null event list — `DayBuilder.kt:59`.** `event list is null, aborting` is followed immediately by `return`. Reaching `build()` with `eventList == null` recreates the logged state.
7. **ID 136, PDF retry — `PdfDownloader.kt:92`.** `Retrying download for...` is entered when the cached PDF cannot be used and `retryDownload()` starts. Removing or corrupting the cache is a plausible reproduction setup.
8. **ID 149, unexpected crop result — `DialogAddBoard.java:129`.** `CROP_IMAGE_ERROR` is the final branch after success and user cancellation have been ruled out. An invalid or failed crop result can recreate this unexpected-result state.

Two useful but less failure-specific examples are ID 137's unexpected camera-permission result in `BarcodeCaptureActivity.java:240` and ID 143's feeding broadcast trace in `AlertReceiver.kt:44`. They identify callback/event paths, but the messages do not by themselves prove a defect.

## Less useful logs and wrappers

Several active calls are mainly instrumentation. ID 118 uses a generic `AppLog` helper and is enabled by debug/emulator conditions. ID 125 is a `BuildConfig.LOGGER_VISIABLE` wrapper, so build configuration controls whether it emits. ID 139 bridges a state-machine logger, and ID 141 logs coroutine thread execution. IDs 142 and 146 are largely advertisement callback traces. ID 103 records a normal fuzz-creator list insertion, and ID 124 records a grade value while populating a dialog. These can help follow execution, but they give little direct information about a unique bug state.

## Main finding

The useful information is not simply the text of a Logcat message. Its value comes from the program state and control-flow path associated with the statement. Logs tied to specific conditions can expose states that may be recreated during bug reproduction, while generic status or wrapper logs give much less direct reproduction information.

## Limitations

This is static source analysis, not a complete runtime log study. It does not establish that a path is reachable under every build, that an external service will produce a particular response, or that a logged state caused a real reported bug. The analysis also does not cover other logging APIs. Some projects contain library/sample modules and conditional source sets; they are included when they are production-looking Java/Kotlin source under the repository, but the source snapshot may not reflect the current upstream project.
