---
title: Core Concepts
description: The terms and screen layout the rest of the manual assumes you know.
number: "1"
section: concepts
order: 10
---

## Interface basics

### 1.1 Pooly Projects

A Pooly project is one song, saved as a `.pool` file. The file holds the tracks and their devices, patterns, launcher and arrangement clips, scenes, mixer settings, tempo, and the project's key and scale. Opening a project loads the whole song and returns you to your workspace.

The **Pools** screen shows a card for each project in your save location (internal app storage or a custom folder on your device). Tap a card to open the project, or tap its play button to preview the song without opening it. Each card's options button offers **Rename**, **Duplicate**, **Export**, **Open Folder**, and **Delete**. Tap **New Project** in the footer to start a new song.

<figure class="manual-media" data-wrap="right">
	<img
		src="/images/application-screenshots/project%20selection.png"
		alt="Pooly project selection screen showing saved project cards."
		width="817"
		height="1303"
		loading="lazy"
	/>
	<figcaption>
		The Pools screen, with a card for each saved project.
	</figcaption>
</figure>

New projects start with four tracks (drums, bass, chords, and melody), each with a randomly picked sound so you can start playing right away. Pooly autosaves while you work. It can also save when you leave a project, quit the app, or switch away from it; choose which in Settings under **App → Save Behavior**. If saving on exit is turned off, Pooly asks before discarding your changes. If Pooly closes unexpectedly, it offers to restore the autosaved copy the next time you open the project.

### 1.2 Header Bar

The header bar runs along the top of the window. It shows where you are and holds the main navigation.

The title shows the song name. On phones, where one view fills the screen, it shows the current track and instrument while you're in Detail View. Tap it to open the Browser and swap the sound. Next to the title, tapping the song avatar opens Settings.

<figure class="manual-media" data-wrap="left">
	<img
		src="/images/application-screenshots/header.png"
		alt="Pooly header bar with navigation buttons and song avatar."
		width="819"
		height="162"
		loading="lazy"
	/>
	<figcaption>
		The header bar, with the song avatar and navigation buttons.
	</figcaption>
</figure>

The rest of the header is navigation:

- **Back** steps back to the previous view on phones, or closes a full-screen view such as Settings
- **Projects** saves and leaves the song, returning you to the Pools screen
- **Launcher / Arrangement** swaps between the two composition views
- **Layout** picks a workspace layout (see [1.4 Layouts](#14-layouts))
- **Browser** and **Device Graph** open those views

### 1.3 Footer Bar

The footer bar runs along the bottom of the window. The transport controls are always there, and each visible view adds its own buttons.

<figure class="manual-media" data-wrap="right">
	<img
		src="/images/application-screenshots/footer.png"
		alt="Pooly footer bar with transport and editing controls."
		width="820"
		height="231"
		loading="lazy"
	/>
	<figcaption>
		The footer bar. Its buttons change depending on which views are open.
	</figcaption>
</figure>

The most common footer controls are **Play**, **Undo**, **Redo**, **Mixer**, and **Launcher**. Play toggles transport for the current project. Undo and redo step through the edit history and disable themselves when there's nothing to step to. Mixer opens the Mixer, and Launcher brings you back to the clip grid.

Other buttons appear when their view is visible. Detail View adds **Double**, **Quantize**, and **Duplicate** for pattern editing, plus **Pad Options** while the performance pads are showing. The Arranger adds a **Pattern Dock** toggle. On the Pools screen the footer only has **New Project**. When you capture a live performance, a capture bar slides up from the footer (see [1.19 MIDI and Automation Capture](#119-midi-and-automation-capture)).

### 1.4 Layouts

Pooly fits its views to your screen. On a phone, one view fills the screen at a time. On a tablet, two views sit side by side, and any others share a tabbed pane. On a desktop or large window, Pooly can show three or more views at once. If you resize the window, Pooly rearranges the views and keeps your place.

Use the **Layout** button in the header to choose what you see together:

- **Default**: the launcher and Detail View, with the Browser alongside
- **Studio**: the launcher and Detail View
- **Arrangement + Detail**: the Arranger timeline beside Detail View
- **Launcher + Mixer**: the clip grid beside the Mixer
- **Sound Design**: Detail View in focus, with the launcher, Device Graph, and Mixer around it

On larger screens you can drag the boundary between two panes to resize them. Pooly remembers your sizes.

### 1.5 Settings

Tap the song avatar in the header to open Settings. It floats over your workspace and has four tabs:

- **Project**: tempo, swing, key and scale, the project image, metronome and count-in, **Export**, and MIDI file import
- **App**: save location, autoplay on clip trigger, the scene launcher, save behavior, zoom, fullscreen, and the time axis direction of the launcher, arranger, and Detail View
- **Theme**: colors, palettes, corners, borders, and icons
- **Driver**: audio buffer size, input and output devices, and MIDI and Bluetooth MIDI connections

Close Settings with its close button.

### 1.6 Undo History

Pooly records your edits in an undo history. Each undo step groups one or more changes into a single action.

The footer **Undo** and **Redo** buttons are available in most editing views. Pressing undo reverts the most recent change; redo replays a change you stepped back over. A short notice tells you what was undone or redone.

The history holds up to 40 steps. Quick, repeated tweaks to the same control are grouped into one step, so dragging a slider doesn't use up your whole history. Making a new edit after undoing clears anything you could have redone.

### 1.7 Arrangement and Launcher

Pooly has two views for building a song. The **Launcher** is a grid: tracks run one way, scenes the other, and each cell holds a clip you can trigger live. Projects open in the Launcher.

<figure class="manual-media" data-wrap="right">
	<img
		src="/images/application-screenshots/arranger%20%2B%20launcher.png"
		alt="Pooly launcher and arranger views showing clip-based and timeline workflows."
		width="1929"
		height="1312"
		loading="lazy"
	/>
	<figcaption>
		The Arranger and the Launcher on one screen.
	</figcaption>
</figure>

The **Arranger** is a linear timeline where clips sit at positions in time. Switch between launcher and arrangement with the **Launcher / Arrangement** button in the header. Time can run left to right or top to bottom; by default it follows your device's orientation, and you can set the direction for each view in Settings under **App → Time Axis Orientation**. The arrangement has a draggable playhead and loop controls.

Both views share the same project. Launcher clips and arranger clips are separate, but they can play the same patterns. Long-press a clip in either view for options such as edit, clone, duplicate, rename, linked editing, and delete. The Arranger also has a pattern dock that lists your patterns while you work on the timeline.

### 1.8 Detail View

Detail View is where you edit the selected track and clip. It opens when you edit a clip from the launcher or arrangement, and what it shows depends on the track. On instrument tracks you get a piano roll, performance pads, and instrument controls; on audio tracks the wave editor and clip controls replace the note editor.

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

The device bar along the top picks what you're editing: the instrument or any effect on the track. The pages below it show that device's controls, such as voices, modulators, filters, and envelopes. Panels can expand to fill the view. Open the **Browser** to swap sounds or add effects.

Pattern buttons such as Double, Quantize, and Duplicate only light up once the clip has content. An automation bar and lane overlay let you pick targets, draw automation, and manage lanes without leaving the editor.

## Musical building blocks

### 1.9 Tracks

A track is a lane in your project that holds clips, a chain of devices, and mixer settings. Every track has a name, a color, and a **kind** that determines what it plays: **MIDI** tracks host synthesizers, samplers, or drum kits and play notes, while **Audio** tracks play recorded or imported sound.

<figure class="manual-media" data-wrap="left">
	<img
		src="/images/application-screenshots/tracks.png"
		alt="Pooly track columns with clip slots and track labels in the launcher."
		width="818"
		height="1462"
		loading="lazy"
	/>
	<figcaption>
		Track columns in the Launcher.
	</figcaption>
</figure>

Every project also has a **Main** track. Each track plays through it on the way to your speakers, so effects you add to Main shape the whole mix. Main lives in the Mixer; it doesn't hold clips.

When you load an instrument, the track name updates to match unless you've renamed it yourself. In the Launcher, Arranger, and Mixer, track headers show the track name, an output indicator, and an icon (set by the first device loaded on a MIDI track; audio tracks always use the same icon); long-press a header for actions such as fold, stop, change color, move, duplicate, and delete. Add tracks with the **MIDI** and **Audio** buttons at the edge of the launcher or mixer, or the add-track button in the Arranger. Reordering tracks updates every view together.

### 1.10 Audio and MIDI

Pooly works with two kinds of material. **Audio** is recorded sound: imported WAV, OGG, or MP3 files, recordings, or audio resampled inside the app. **MIDI** is note data, instructions like "play this pitch at this time with this velocity." MIDI makes no sound on its own; an instrument on the track has to play it.

MIDI tracks turn notes into sound through instruments such as FM synths, samplers, or drum kits. A sampler maps notes across one or many sounds; a drum kit gives each pad its own sound. Audio tracks skip that step and play their recordings directly, with clip controls for gain, pan, and warping to fit the project tempo.

The track kind decides what it can hold: note clips go on MIDI tracks and audio clips on audio tracks. Detail View changes to match: piano roll and performance pads for MIDI, wave editor and clip controls for audio.

### 1.11 Clips, Patterns, and Scenes

A **pattern** is the musical content: notes on a MIDI track, or a recording on an audio track. A **clip** places a pattern on a track, either in the Launcher grid or on the Arranger timeline. Several clips can share one pattern; with linked editing on, changing one changes them all.

**Scenes** are the rows of the Launcher. Each scene holds one slot per track; launching a scene triggers every clip in that row together. Use scenes for song sections or to switch parts during a live set. Turn the scene buttons on or off in Settings under **App → Show Scene Launcher**. Scene launches wait for the next musical boundary so transitions land in time.

When you edit notes or audio in Detail View, you're editing the pattern. When you launch, move, or arrange, you're working with clips.

### 1.12 Clips

A clip connects a pattern to a place in your project. **Launcher** clips live in the Clip Launcher grid, and **arranger** clips sit on the timeline.

Each clip decides how much of its pattern plays and whether it loops. Audio clips also keep their own gain, pan, and warp settings, so two clips playing the same recording can sound different.

Clips can have their own name and color. **Linked Editing** (in the clip's long-press menu) controls whether edits to the clip's pattern reach other clips that share it. When linked editing is off, Pooly gives the clip its own copy the first time you edit it.

### 1.13 MIDI Patterns

A MIDI pattern holds the notes for a MIDI track, plus the length of its loop. Each note has a pitch, position, length, and velocity.

Patterns remember how you were viewing them in the piano roll, such as scroll and zoom. Smart quantize nudges note starts toward the previous grid step rather than the nearest one. Patterns can also carry their own key and scale, overriding the song's for that clip.

Patterns can hold their own **automation lanes**, so parameter moves travel with the notes they belong to.

### 1.14 Audio Patterns

An audio pattern is a recording that plays as clip content on an audio track, along with settings such as gain, pan, pitch, and warp mode.

Warp mode controls how audio stretches to follow the project tempo. Choose from **Off**, **Repitch**, **Beats**, **Tones**, **Texture**, and **Complex** in the clip controls. Pooly detects a file's tempo when you load it, and warp markers let you pin moments in the recording to beats on the timeline. Audio patterns can also carry automation for clip settings over time.

Unlike MIDI patterns, audio patterns don't contain notes. Detail View's wave editor is where you view, trim, and loop them.

### 1.15 Devices

Devices make and shape the sound. Each track has a chain of devices: **instruments** that turn notes into sound, **racks** that hold other devices, and **audio effects** that process the sound afterward.

Instruments include **synths** and **samplers**. **Drum racks** give each pad its own device, while **instrument racks** layer several instruments together. Audio effects include reverb, delay, chorus, filters, distortion, compression, EQ, and more.

Sound flows from your notes through the instrument, then through any effects, then through the track's mixer strip and on to Main. Open the **Device Graph** from the header to see a track's whole chain. Drag devices to reorder them, or build racks to layer sounds. Add and swap instruments and effects from the Browser.

### 1.16 Presets

A preset is a saved sound you can load onto a track. Pooly comes with a large factory library: FM voices, sampled instruments, drum kits, effects, and more.

You choose presets in the **Browser**. Pick a tab such as Instruments, Drums, or FX, narrow by category or search by name, and load a preset onto the selected track. Loading an instrument replaces the track's sound but keeps its mixer settings and effects. Changes you make after loading are saved in your project and leave the preset untouched.

You can save your own presets from the instrument's core panel in Detail View.

### 1.17 Project Scale and Key

Every Pooly project has a root **key** and **scale**. These decide which note rows the piano roll offers and guide Pooly's editing helpers. Change them in Settings on the **Project** tab using the **Root Note** and **Scale** selectors. Changes apply right away and retune the MIDI across the project. You can undo them like any other edit.

Individual MIDI patterns can also have their own key and scale. When a pattern has one, Detail View uses it for that clip; otherwise it uses the song's. This lets you write a passage in a borrowed mode without retuning the whole project.

### 1.18 Automation

Automation records how a parameter changes over time and replays those changes with the song. Pooly stores automation in **lanes**, each targeting a control on a device, the mixer, or a clip. Lanes hold points placed in musical time.

Detail View shows automation with an automation bar and a lane overlay on the piano roll or wave editor: toggle the overlay, pick a lane, draw or edit points, mute lanes, or delete them.

You can also record automation live: turn a control while the song plays, then commit it with the capture bar in the footer.

### 1.19 MIDI and Automation Capture

Capture keeps a running record of what you play. Notes from the pads or a MIDI controller, and controls you turn during playback, go into a holding buffer first. Nothing is written to the pattern until you commit it.

As soon as something is captured, a **capture bar** slides up from the footer. Tap **capture** to commit the notes or automation to the clip, or tap **✕** to discard the take. If you stop playing for about a bar, Pooly pauses the take and keeps what you've played. Capturing on an empty slot creates a new clip.
