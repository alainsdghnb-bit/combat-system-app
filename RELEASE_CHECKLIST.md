# Combat System v1.0 RC1 — Release Checklist

## Automated — PASS
- TypeScript typecheck
- 60 automated behavior tests
- 116 canonical skill IDs
- 36 Hybrid Integration Nodes
- 232 drill parent references
- scheduler collision tests
- RED/AMBER/GREEN behavior
- gate representativeness constraints
- round-by-round adaptation
- cycle rescheduling and consolidation budget
- backup payload validation
- orphan-state detection
- local restore-point retention
- Android asset sync
- Android shell static validation

## Device tests still required before calling v1.0 final
- install signed APK on Galaxy S25 (SM-S931 family)
- notification permission on first request
- timer completion with screen on / screen off / app backgrounded
- haptic and tone behavior with Samsung sound/vibration modes
- safe-area/cutout and navigation gesture layout
- native JSON backup export + re-import
- local video chooser and playback
- process kill during session then Resume Session
- 30+ minute continuous session battery/thermal behavior
- one complete real training session from Today through Review

## Final-release rule
RC1 must not be renamed v1.0 final until the physical-device tests above are completed or explicitly waived.
