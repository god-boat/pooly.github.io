---
title: Detail View
description: Clip Detail for editing patterns, devices, and automation.
number: "1.12"
section: concepts
order: 120
---

Detail View is Pooly's deep editing view for a selected track, clip, and pattern. It opens when you edit clip content from the launcher or arrangement, and it adapts its layout to the track kind. On instrument tracks you get a piano roll, performance surface, and instrument parameter controls; on audio tracks the wave editor and audio core panel replace the note editor while sharing the same parameter and automation infrastructure.

The view is organized into panels with tabs for voices, modulators, filters, envelopes, samples, and audio effects. You can expand panels to fullscreen for focused editing. Selecting the header title on an instrument track opens the instrument browser, where you swap synth voices, samplers, or drum kits from the preset library. A parallel browser mode selects effects for a chosen device in the chain.

Detail View coordinates editing states: an active clip or an empty track with no content yet. Footer buttons for pattern length, duplicate, and quantize enable only when a content-backed pattern exists. An automation control bar and lane overlay let you select targets, draw automation, and manage lanes without leaving the editor. Layout state is remembered separately for MIDI and audio track types so switching between them restores your last panel arrangement.

## Related pages

- [1.7 MIDI Patterns](/manual/concepts/midi-patterns/)
- [1.8 Audio Patterns](/manual/concepts/audio-patterns/)
- [1.15 Automation](/manual/concepts/automation/)
- [1.10 Devices](/manual/concepts/devices/)
