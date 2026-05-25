---
title: Arrangement and Launcher
description: Session view and timeline view for performing and composing.
number: "1.11"
section: concepts
order: 110
---

Pooly gives you two complementary views of the same song. The **Clip Launcher** is a session-style matrix: columns are tracks, rows are scenes, and cells hold launcher clips you trigger in real time. It is the default working view when you open a project—ideal for trying ideas, launching scenes, and building sections before committing to a fixed timeline. Track headers run along the top; scene launch buttons sit in a scrollable column you can toggle from the footer.

The **Arrangement** is a linear timeline view where arranger clips sit at bar positions across horizontal (landscape) or vertical (portrait) layouts. You can switch between launcher and arrangement with the header/footer arrangement button; portrait devices open the vertical arrangement, landscape opens the horizontal one. The arrangement exposes a pattern map with a draggable playhead, loop controls, and touch gestures for moving, resizing, and editing clips on the timeline.

Both views share the same underlying song model. Launcher clips and arranger clips are distinct clip kinds referencing the same pattern pool—placing material on the timeline does not destroy launcher slots, and duplicating or editing patterns can be done from either view. Long-press menus in both surfaces offer clip operations such as edit, clone, duplicate pattern, rename, link management, and delete. A pattern dock in arrangement views gives quick access to the pattern library while editing the timeline.

## Related pages

- [3 Clip Launcher](/manual/views/clip-launcher/)
- [4 Arranger](/manual/views/arranger/)
- [1.4 Clips, Patterns, and Scenes](/manual/concepts/clips-patterns-scenes/)
