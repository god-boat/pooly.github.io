---
title: Devices
description: Instruments, racks, and effects in a track's device chain.
number: "1.10"
section: concepts
order: 100
---

Devices are the building blocks of sound generation and processing in Pooly. Each track owns a **device graph** inside its device chain: an ordered graph of device nodes with parameters, routing, and runtime state. The device kind catalog classifies every device as playable (generates sound from MIDI), a rack (container for other devices), or an audio effect (processes audio downstream).

Playable leaf devices include **synth** and **sampler** voices, built at runtime from engine presets referenced by each device's `voiceType` and `voicePreset` fields. **Drum racks** and **instrument racks** are container devices: a drum rack maps pads to child devices, while an instrument rack chains multiple instruments. Audio effects are drawn from the effect catalog—reverb, delay, filter, distortion, and others—and insert into the chain after the instrument path.

Audio flows from MIDI input through playable devices, then through any effects, then through the track mixer (volume, pan, mute, solo) before reaching the master output. Device parameters are spec-driven: each kind resolves its parameter list from device and effect spec resources, and changes commit through the param system with full undo support. You browse and swap instruments and effects from Clip Detail's full-screen browser overlay.

## Related pages

- [1.5 Tracks](/manual/concepts/tracks/)
- [1.14 Presets](/manual/concepts/presets/)
- [1.12 Detail View](/manual/concepts/detail-view/)
