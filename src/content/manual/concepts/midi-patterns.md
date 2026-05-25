---
title: MIDI Patterns
description: Note data, quantization, and piano-roll content on instrument tracks.
number: "1.7"
section: concepts
order: 70
---

A MIDI pattern holds the note content for an instrument track. Notes are stored as structured events with pitch, position, length, velocity. Patterns declare an authored length, which defines the loopable content window shared by every clip that references the pattern.

MIDI patterns carry editing metadata used by the piano roll: scroll and zoom state, note row height, and quantization settings. Smart quantize biases note starts toward the previous grid step rather than the nearest one. Patterns also store optional key and scale indices that can override the song defaults for display and editing helpers in Detail View.

Embedded **automation lanes** live inside the pattern as an `AutomationLaneSet`, separate from device-chain automation. This lets you automate pattern-local targets alongside note data. When multiple clips share a linked pattern, a note edit in Detail View updates the underlying pattern for all linked instances; unlinking or forking creates an independent copy with its own ID.

## Related pages

- [1.6 Audio and MIDI](/manual/concepts/audio-and-midi/)
- [1.9 Clips](/manual/concepts/clips/)
- [1.15 Automation](/manual/concepts/automation/)
