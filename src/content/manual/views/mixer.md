---
title: Mixer
description: Per-track volume, pan, mute, solo, and metering.
number: "5"
section: views
order: 10
---

The Mixer view shows every track as a horizontal channel strip with a fader, pan control, mute and solo buttons, and a level meter. It mirrors the track list from your project—adding or removing tracks in the Clip Launcher updates the mixer automatically. Open it from the **Mixer** button in the footer while working in any main editing view.

Each strip displays the track header with name, color, and the same context actions available elsewhere: stop track output, change color, reorder, duplicate, or delete. Volume and pan read from the track device chain's mixer dictionary; committing a fader move writes through the param system with undo support. Solo logic respects the project's solo-in-place rules: engaging solo on one track mutes others for monitoring, and the UI reflects the effective mute state across all strips.

Use the mixer for balancing levels while arranging or performing, not for deep sound design—that belongs in Clip Detail's device panels. Level meters update on a throttled tick while the mixer view is visible to keep mobile performance acceptable. Add **MIDI** or **Audio** tracks from the column at the end of the strip row, matching the launcher’s track-creation workflow.

## Related pages

- [1.5 Tracks](/manual/concepts/tracks/)
- [1.10 Devices](/manual/concepts/devices/)
- [1.3 Footer Bar](/manual/concepts/footer-bar/)
