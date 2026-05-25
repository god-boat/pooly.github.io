---
title: Audio Patterns
description: Imported audio, warp modes, and clip parameters on audio tracks.
number: "1.8"
section: concepts
order: 80
---

An audio pattern represents a trimmed portion of an external audio file that plays as clip content on an audio track. It stores the file path, the file's native duration and sample rate, and a dictionary of clip parameters such as gain, pan, pitch, and warp mode.

Warp mode controls how audio stretches to follow project tempo. Pooly supports several algorithms—off (no warping), repitch, tones, and texture—selected through the clip parameter UI. When warping is active, warp markers on the clip instance map between seconds in the source file and beats in the timeline, giving fine control over tempo-synced playback. Audio patterns can also carry embedded automation lanes for automating clip-level parameters over time.

Unlike MIDI patterns, audio patterns do not contain notes. Their musical identity is the underlying recording plus clip-instance geometry: content start/end bounds, loop windows, and per-clip parameter overrides stored on the `Clip` resource. Detail View's wave editor is the primary surface for viewing and editing this material, while the audio core panel exposes the parameter set.

## Related pages

- [1.6 Audio and MIDI](/manual/concepts/audio-and-midi/)
- [1.9 Clips](/manual/concepts/clips/)
- [1.12 Detail View](/manual/concepts/detail-view/)
