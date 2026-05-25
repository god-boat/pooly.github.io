---
title: Clips
description: Pattern instances in the launcher and on the arrangement timeline.
number: "1.9"
section: concepts
order: 90
---

A clip is the object that connects a pattern to a place in your project. It has a unique ID, references a pattern by `pattern_id`, and belongs to a track. Clips come in two kinds: **launcher** clips live in the Clip Launcher grid slots, and **arranger** clips sit on the timeline. The same pattern data can back multiple clips; the `linked` flag controls whether editing one clip's pattern updates all linked siblings or forks a private copy on first edit.

Clips own playback geometry separate from the pattern's authored length. Content bounds (`clip_start`, `clip_end`) define which portion of the pattern plays. Loop bounds (`clip_loop_start`, `clip_loop_end`) and `clip_loop_enabled` define cycling behavior during playback. Audio clips additionally store per-instance `clip_params` and warp markers, so two clips referencing the same audio pattern can differ in gain, warp settings, or marker placement.

Clips also carry presentation metadata: an optional custom name and color override, and a disabled flag to mute them without deleting content. At runtime the clip resolves its pattern reference from the song's pattern pool. Arrangement and launcher views operate on clips; Clip Detail edits the pattern behind the selected clip (or an unplaced pattern on an empty slot), respecting link state and track kind.

## Related pages

- [1.4 Clips, Patterns, and Scenes](/manual/concepts/clips-patterns-scenes/)
- [1.11 Arrangement and Launcher](/manual/concepts/arrangement-and-launcher/)
- [1.12 Detail View](/manual/concepts/detail-view/)
