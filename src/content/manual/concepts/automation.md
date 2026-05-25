---
title: Automation
description: Parameter changes over time on patterns and device chains.
number: "1.15"
section: concepts
order: 150
---

Automation records how a parameter changes across time so sound can evolve during playback without manual tweaking. Pooly stores automation in **lanes**, each targeting a specific parameter on a device, mixer, or clip. Lanes contain points positioned in musical time; the engine interpolates between them during playback.

There are two primary automation homes. **Embedded automation** lives inside a pattern's `AutomationLaneSet`—useful for pattern-local sweeps that travel with the note or audio content. **Device-chain automation** lives on the track's device chain and follows the track regardless of which clip is playing. Clip Detail exposes both through an automation control bar and a lane overlay on the piano roll or wave editor: toggle the overlay, pick a lane, draw or edit points, mute lanes, or delete them.

Automation edits are fully undoable and go through the pattern and device-chain mutation services, keeping arrangement playback geometry in sync when loop bounds change. The overlay binds to whichever editor is active—note map for MIDI, wave editor for audio—and refreshes when you switch clips, tracks, or automation targets.

## Related pages

- [1.12 Detail View](/manual/concepts/detail-view/)
- [1.16 MIDI and Automation Capture](/manual/concepts/midi-automation-capture/)
- [1.10 Devices](/manual/concepts/devices/)
