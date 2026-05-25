---
title: Project Scale and Key
description: Song-level tonality settings and how they affect editing.
number: "1.13"
section: concepts
order: 130
---

Every Pooly project has a root **key** and **scale** stored on the song. These defaults apply project-wide—for example, highlighting scale tones in the piano roll and informing editing helpers. You change them from Settings under the Project tab using the root-note and scale selectors. Changes propagate immediately through the `song_key_changed` and `song_scale_changed` signals, refreshing Clip Detail and other views that depend on tonality.

Individual MIDI patterns can also store their own key and scale indices. When a pattern defines these values, Clip Detail prefers the pattern's tonality for that clip's editor; otherwise it falls back to the song defaults. This lets you write a passage in a borrowed mode without retuning the entire project, while still keeping a global key for new material and display consistency.

Scale and key are indexing into Pooly's note and scale tables—they are not merely display labels. Altering the project scale in Settings updates the active editing context for tracks that inherit song defaults, including note map shading and related UI. Pattern-level overrides remain intact until you clear or change them on the pattern itself.

## Related pages

- [1.1 Pooly Projects](/manual/concepts/projects/)
- [1.7 MIDI Patterns](/manual/concepts/midi-patterns/)
- [1.12 Detail View](/manual/concepts/detail-view/)
