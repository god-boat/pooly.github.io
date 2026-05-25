---
title: Audio and MIDI
description: The two signal types Pooly works with and how they map to tracks.
number: "1.6"
section: concepts
order: 60
---

Pooly works with two fundamentally different kinds of musical material. **Audio** is sampled waveform data—numbers that approximate a continuous signal over time. It can come from imported WAV or OGG files, recordings, or audio rendered inside the app. **MIDI** is symbolic performance data: instructions like "play this pitch at this time with this velocity," closer to a score than a recording. MIDI by itself makes no sound; a device on the track must interpret it.

Instrument tracks convert MIDI into audio through playable devices such as FM synths, samplers, or drum racks. A sampler maps chromatic notes across a single sound; a drum rack maps each pad to its own sample or synth voice. Audio tracks skip that conversion step and play back audio patterns directly, with clip-level controls for gain, pan, warp mode, and warp markers to align material with the project tempo.

The track kind enforces compatibility: MIDI patterns belong on instrument tracks and audio patterns on audio tracks. You create each type with separate add-track controls in the Clip Launcher and Mixer. Clip Detail adapts its layout accordingly—piano roll and performance pads for MIDI, a wave editor and audio core panel for audio—while sharing parameter, automation, and device-editing surfaces where they apply.

## Related pages

- [1.5 Tracks](/manual/concepts/tracks/)
- [1.7 MIDI Patterns](/manual/concepts/midi-patterns/)
- [1.8 Audio Patterns](/manual/concepts/audio-patterns/)
