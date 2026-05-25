---
title: MIDI and Automation Capture
description: Recording notes and knob moves into the capture buffer.
number: "1.16"
section: concepts
order: 160
---

Capture is Pooly's live recording buffer for live input. When you play MIDI notes or tweak automateable controls during playback, pooly accumulates events in a session rather than writing them immediately. Note capture records pitch, timing, velocity, and duration relative to the active clip or pending pattern slot. Automation capture records parameter changes against a selected target on the track.

A capture session stays open until you commit or discard it. While capturing, inactivity eventually freezes note input after roughly one bar without new notes—the buffer is preserved, not auto-committed. Starting playback clears any open capture session to avoid accidental merges. When material is ready, tap the capture button (a short press) to **commit** notes or automation points into the pattern and clear the buffer. **Long-press** the capture button to discard the buffer without committing.

The capture button appears only when there is something to commit. It sits in the **footer** and reflects buffer state visually—growing while you hold to clear, popping in when captured material exists. Committed capture respects the current clip link state and may materialize a new launcher clip when capturing into an empty slot.

## Related pages

- [1.15 Automation](/manual/concepts/automation/)
- [1.7 MIDI Patterns](/manual/concepts/midi-patterns/)
- [1.12 Detail View](/manual/concepts/detail-view/)
