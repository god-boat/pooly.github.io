---
title: Undo History
description: Stepping backward and forward through editable changes.
number: "1.17"
section: concepts
order: 170
---

Pooly records your edits in a structured undo history managed by the state manager. Each undo step is a **state change** grouping one or more reversible actions with a human-readable notice label. Changes are categorized by type—song, pattern, instrument, or arrangement—so the engine knows which subsystems to notify when you undo or redo.

The footer **Undo** and **Redo** buttons are available in most editing views. They enable and disable automatically based on whether history exists in the respective direction. Pressing undo reverts the most recent committed change; redo replays a change you stepped back over. A notice popup briefly describes what happened, using the operation label stored with that history entry (for example "Duplicate Pattern" or a parameter-specific description).

The history stack holds up to 40 steps. Rapid successive edits to the same parameter can **accumulate** into a single undo step when they occur within a short time window, so dragging a slider does not consume the entire history. Starting a new edit after undo clears the redo branch—the future stack is discarded, which is standard undo behavior. Loading a project or making structural resets clears history to avoid applying stale operations to a different document state.

## Related pages

- [1.3 Footer Bar](/manual/concepts/footer-bar/)
- [1.11 Arrangement and Launcher](/manual/concepts/arrangement-and-launcher/)
