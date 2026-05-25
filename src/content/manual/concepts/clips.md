---
title: Clips
description: Pattern instances in the launcher and on the arrangement timeline.
number: "1.9"
section: concepts
order: 90
---

A clip is the object that connects a pattern to a place in your project. It has a unique ID, references a pattern, and belongs to a track. Clips come in two kinds: **launcher** clips live in the Clip Launcher grid slots, and **arranger** clips sit on the timeline. The same pattern data can back multiple clips; the `linked` flag controls whether editing one clip's pattern updates all linked siblings or forks a private copy on first edit.

Clips own playback geometry separate from the pattern's authored length. Content bounds define which portion of the pattern plays. Loop bounds and clip loop state define cycling behavior during playback. Audio clips additionally store per-instance clip parameters and warp markers, so two clips referencing the same audio pattern can differ in gain, warp settings, or marker placement.

Clips also carry presentation metadata: an optional custom name and color override, and a disabled flag to mute them without deleting content. Arrangement and launcher views operate on clips; Detail View edits the pattern behind the selected clip.

## Related pages

- [1.4 Clips, Patterns, and Scenes](/manual/concepts/clips-patterns-scenes/)
- [1.11 Arrangement and Launcher](/manual/concepts/arrangement-and-launcher/)
- [1.12 Detail View](/manual/concepts/detail-view/)
