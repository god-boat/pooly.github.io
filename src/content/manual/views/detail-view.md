---
title: Detail View
description: Edit notes and audio, shape sounds, and draw automation.
number: "6"
section: views
order: 10
---

## 6.1 When to use Detail View

Detail View is where you edit the selected track and clip. Open it to write notes, change a sound, draw automation, or add effects. What it shows depends on the track: MIDI tracks get a piano roll, performance pads, and instrument controls; audio tracks swap in the wave editor and clip controls.

<figure class="manual-media" data-wrap="right">
	<img
		src="/images/application-screenshots/detail.png"
		alt="Pooly Detail View showing voice controls and drum clip slots."
		width="686"
		height="1029"
		loading="lazy"
	/>
	<figcaption>
		Detail View on a drum track.
	</figcaption>
</figure>

## 6.2 Opening Detail View

From the Clip Launcher or Arranger, double tap a clip, or long-press it and choose **Edit**. Tapping an empty launcher slot or a track header opens it too. On a phone, tap **Back** to return; on larger screens Detail View sits beside your other views and follows whichever track you select.

## 6.3 Devices and pages

The device bar along the top chooses what you're editing: the track's instrument, any effect in its chain, or, on an audio track, the clip itself. Below it, pages such as voices, modulators, filters, envelopes, and samples show that device's controls. Panels can expand to fill the view.

## 6.4 Editing MIDI clips

On a MIDI track Detail View shows:

- The **piano roll** for note placement, length, and velocity
- **Performance pads** for playing live, finger drumming, and chords
- **Device controls** for the selected instrument or effect
- An **automation overlay** for lane editing on top of the notes

Use **Pad Options** in the footer to change the pads' layout and octave. Footer buttons for **Double**, **Quantize**, and **Duplicate** light up once the clip has content. Smart quantize nudges note starts toward the previous grid step rather than the nearest one.

## 6.5 Editing audio clips

On an audio track Detail View replaces the note editor with:

- The **wave editor** for trimming, looping, and previewing your audio
- **Clip controls** such as gain, pan, pitch, and warp mode
- The same **automation overlay** for lane editing

An empty audio clip offers **Load Sample**, **Record**, **Resample**, and capturing audio playing on your device. Warp markers let you line audio up with the project tempo when warping is on.

## 6.6 Sounds and effects

Open the **Browser** to choose a new synth, sampler, or drum kit, or to add effects to the track. Loading a new instrument keeps the track's mixer settings and effects.

You can save tweaked sounds as new presets from the instrument's core panel.

## 6.7 Automation in Detail View

The **automation bar** and lane overlay let you pick a target, draw automation, mute lanes, and manage them without leaving the editor. To record automation live, move a control while the song plays and commit the take with the capture bar in the footer.

## 6.8 Tips

- Turn off **Linked Editing** on a clip before editing if you only want to change that one copy of a shared pattern
- Draw quick parameter sweeps right on the automation overlay
- Try the **Sound Design** layout to keep the Device Graph and Mixer close while you shape a sound

## Related pages

- [1.8 Detail View](/manual/core-concepts/#18-detail-view)
- [2 Browser](/manual/views/browser/)
- [3 Clip Launcher](/manual/views/clip-launcher/)
- [1.18 Automation](/manual/core-concepts/#118-automation)
- [Build an instrument](/learn/building-an-instrument/)
