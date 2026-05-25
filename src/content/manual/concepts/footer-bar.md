---
title: Footer Bar
description: Transport, history, and view-specific tools at the bottom of the screen.
number: "1.3"
section: concepts
order: 30
---

The footer bar is Pooly's persistent control strip at the bottom of the window. Like the header, it is built dynamically: each view exposes a footer configuration that turns individual buttons on or off. This keeps the interface focused—Clip Detail shows pattern-editing tools, the Projects screen shows **New Project**, and the Clip Launcher can expose the scene-launcher toggle—while shared controls stay in familiar places across views.

The most common footer controls are **Play**, **Undo**, **Redo**, and **Mixer**. Play toggles transport for the current project. Undo and redo step through the edit history maintained by the state manager; buttons disable automatically when no action is available. Mixer opens the mixing view where you adjust per-track volume, pan, mute, and solo. In Clip Detail, additional footer buttons appear for pattern operations such as halving or doubling length, duplicating the pattern, and quantizing notes—these are disabled when you are on an empty track with no pattern content yet.

Other footer buttons appear contextually. The **Arrangement** toggle (also available in the header) switches between launcher and timeline views. A **Pattern Dock** button toggles the arrangement pattern dock in horizontal or vertical arrangement layouts. **Pad Options** opens performance-pad settings in Clip Detail. On the Projects screen, the footer is simplified to creation and navigation affordances rather than transport controls.

## Related pages

- [1.2 Header Bar](/manual/concepts/header-bar/)
- [1.17 Undo History](/manual/concepts/undo-history/)
- [5 Mixer](/manual/views/mixer/)
