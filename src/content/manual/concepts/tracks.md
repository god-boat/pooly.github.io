---
title: Tracks
description: lanes that carry patterns, devices, and clips.
number: "1.5"
section: concepts
order: 50
---

A track is a lane in your project that owns a device chain, mixer settings, and all clips routed through it. Every track has a persistent numeric ID, a user-visible name, a color, and a **kind** that determines what content it accepts: **Instrument** tracks host synthesizers, samplers, or drum racks and play MIDI patterns, while **Audio** tracks host audio patterns backed by recorded or imported files.

Each track's sound path runs through its **device chain**—the canonical store for devices, mixer parameters, routing, automation, and view state. When you add an instrument, the track name can update automatically to match unless you have renamed it yourself.

In the Launcher and Mixer, tracks appear as columns or channel strips with headers showing name, color, and context actions such as stop, duplicate, move, and delete. You add tracks with dedicated **MIDI** and **Audio** buttons at the edge of the launcher or mixer. Reordering tracks updates the grid and mixer together so clip slots and channel order remain aligned. In the Arranger, tracks can appear as rows or columns depending on the layout.

## Related pages

- [1.6 Audio and MIDI](/manual/concepts/audio-and-midi/)
- [1.10 Devices](/manual/concepts/devices/)
- [1.11 Arrangement and Launcher](/manual/concepts/arrangement-and-launcher/)
