---
title: Presets
description: Engine voices, factory libraries, and the instrument browser.
number: "1.14"
section: concepts
order: 140
---

Presets are the saved sound identities Pooly uses to build runtime instruments. The GDSiON engine ships with a large factory library of instrument presets—FM voices, sampled instruments, drum kits, and more—indexed through an engine presets manifest. When a device is created or loaded, the device kind catalog resolves its `voiceType` to an init preset and constructs the appropriate synth, sampler, or drum rack instrument at runtime.

You choose presets through the full-screen **instrument browser** in Clip Detail. Browse by category and subcategory, search by name, and tap a preset to load it onto the current track's device. A separate browser mode selects **effects** for an existing device in the chain. Preset selection replaces the playable device configuration while preserving the track's mixer and routing; parameter tweaks afterward are stored in the device's canonical state, not in the preset file itself.

User projects reference presets by key—the device stores provenance metadata such as `voicePreset` and `voiceType` so projects reload reliably even as the factory library evolves. Custom or exported preset workflows exist for development builds, but day-to-day music making centers on picking from the built-in library and refining sound with device parameters, modulation, and effects in Clip Detail.

## Related pages

- [1.10 Devices](/manual/concepts/devices/)
- [1.12 Detail View](/manual/concepts/detail-view/)
- [2 Working with the Browser](/manual/views/browser/)
