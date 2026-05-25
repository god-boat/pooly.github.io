---
title: Clips, Patterns, and Scenes
description: How Pooly's three core musical layers fit together.
number: "1.4"
section: concepts
order: 40
---

Pooly separates *what you wrote* from *where it plays*. A **pattern** is the authored musical content—MIDI notes on an instrument track, or audio file data on an audio track. A **clip** is an instance that places a pattern on a track, either in the Launcher grid or on the Arranger timeline. Multiple clips can reference the same pattern; when they are linked, edits propagate across all of them, and when unlinked each clip owns its own forked copy.

**Scenes** organize the Launcher into horizontal rows. Each scene row holds one slot per track; launching a scene triggers the clips in that row together, which is useful for song sections and live performance. Scene launch buttons sit beside the launcher grid and can be shown or hidden from the footer. Launch quantization is governed by the song's launch-quantization setting so transitions land on musically sensible boundaries.

Understanding the distinction matters in practice. You edit note or audio content in Detail View, working on the underlying pattern. You launch and arrange music by manipulating clips—moving them in the launcher, placing them on the timeline, or triggering scenes. Patterns hold length, key/scale metadata, and embedded automation; clips add playback geometry such as start/end bounds, loop windows, and per-instance audio parameters.

## Related pages

- [1.9 Clips](/manual/concepts/clips/)
- [1.7 MIDI Patterns](/manual/concepts/midi-patterns/)
- [1.8 Audio Patterns](/manual/concepts/audio-patterns/)
- [1.11 Arrangement and Launcher](/manual/concepts/arrangement-and-launcher/)
