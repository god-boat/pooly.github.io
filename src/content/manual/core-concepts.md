---
title: Core Concepts
description: The vocabulary, layout, and musical building blocks that everything else in Pooly assumes.
number: "1"
section: concepts
order: 10
---

## Interface basics

### 1.1 Pooly Projects

A Pooly project is a complete song workspace saved as a `.pool` file. Everything that defines your music lives inside it: tracks and their devices, patterns, clips in the launcher and arrangement, scenes, mixer settings, tempo, and project key and scale. When you open a project, Pooly loads the full song and drops you back into your workspace.

The **Pools** screen shows every saved project as a card, pulled from your save location (internal app storage or a custom folder on your device). Tap a card to open the project, or tap its play button to preview the song without opening it. Each card's options button offers **Rename**, **Duplicate**, **Export**, **Open Folder**, and **Delete**. Use the **New Project** button in the footer to start a fresh song.

<figure class="manual-media" data-wrap="right">
	<img
		src="/images/application-screenshots/project%20selection.png"
		alt="Pooly project selection screen showing saved project cards."
		width="817"
		height="1303"
		loading="lazy"
	/>
	<figcaption>
		The Pools screen is your library of saved songs and quick project actions.
	</figcaption>
</figure>

New projects come with four tracks—drums, bass, chords, and a melody—each loaded with a randomly picked sound so you can start creating immediately. Pooly autosaves while you work and can also save when you leave a project, quit the app, or switch away from it; choose which in Settings under **App → Save Behavior**. If saving on exit is turned off, Pooly asks before discarding your changes. If Pooly closes unexpectedly, it offers to restore the autosaved copy the next time you open the project.

### 1.2 Header Bar

The header bar sits at the top of the Pooly window and gives you context about where you are and quick access to global controls.

The title shows the song name. On phones, where one view fills the screen, it shows the current track and instrument while you're in Detail View—tap it to open the Browser and swap the sound. Next to the title, tapping the song avatar opens Settings.

<figure class="manual-media" data-wrap="left">
	<img
		src="/images/application-screenshots/header.png"
		alt="Pooly header bar with navigation buttons, and song avatar."
		width="819"
		height="162"
		loading="lazy"
	/>
	<figcaption>
		The header keeps navigation and context controls in one consistent place.
	</figcaption>
</figure>

The rest of the header is navigation:

- **Back** steps back to the previous view on phones, or closes a full-screen view such as Settings
- **Projects** saves and leaves the song, returning you to the Pools screen
- **Launcher / Arrangement** swaps between the two composition views
- **Layout** picks a workspace layout (see [1.4 Layouts](#14-layouts))
- **Browser** and **Device Graph** open those views

### 1.3 Footer Bar

The footer bar is Pooly's persistent control strip at the bottom of the window. Transport controls persist while every visible view adds its own buttons.
<figure class="manual-media" data-wrap="right">
	<img
		src="/images/application-screenshots/footer.png"
		alt="Pooly footer bar with transport and editing controls."
		width="820"
		height="231"
		loading="lazy"
	/>
	<figcaption>
		Footer controls change by view, while transport and core actions stay familiar.
	</figcaption>
</figure>

The most common footer controls are **Play**, **Undo**, **Redo**, **Mixer**, and **Launcher**. Play toggles transport for the current project. Undo and redo step through the edit history and disable themselves when there's nothing to step to. Mixer opens the Mixer, and Launcher brings you back to the clip grid.

Other buttons appear when their view is visible. Detail View adds **Double**, **Quantize**, and **Duplicate** for pattern editing, plus **Pad Options** while the performance pads are showing. The Arranger adds a **Pattern Dock** toggle. On the Pools screen the footer is simply **New Project**. When you capture a live performance, a capture bar slides up from the footer (see [1.19 MIDI and Automation Capture](#119-midi-and-automation-capture)).

### 1.4 Layouts

Pooly arranges its views to fit your screen. On a phone, one view fills the screen at a time. On a tablet, two views sit side by side, with extra views sharing a tabbed pane. On a desktop or large window, Pooly can show three or more views at once. Resize the window and Pooly reflows to match, keeping your place.

Use the **Layout** button in the header to choose what you see together:

- **Default** — the launcher and Detail View, with the Browser alongside
- **Studio** — the launcher and Detail View
- **Arrangement + Detail** — the Arranger timeline beside Detail View
- **Launcher + Mixer** — the clip grid beside the Mixer
- **Sound Design** — Detail View in focus, with the launcher, Device Graph, and Mixer around it

On larger screens you can drag the boundary between two panes to resize them. Pooly remembers your sizes.

### 1.5 Settings

Tap the song avatar in the header to open Settings. It floats over your workspace and has four tabs:

- **Project** — tempo, swing, key and scale, the project image, metronome and count-in, **Export**, and MIDI file import
- **App** — save location, autoplay on clip trigger, the scene launcher, save behavior, zoom, fullscreen, and the time axis direction of the launcher, arranger, and Detail View
- **Theme** — colors, palettes, corners, borders, and icons
- **Driver** — audio buffer size, input and output devices, and MIDI and Bluetooth MIDI connections

Close Settings with its close button.

### 1.6 Undo History

Pooly records your edits in an undo history. Each undo step groups one or more changes into a single action.

The footer **Undo** and **Redo** buttons are available in most editing views. Pressing undo reverts the most recent change; redo replays a change you stepped back over. A short notice tells you what was undone or redone.

The history holds up to 40 steps. Quick, repeated tweaks to the same control are grouped into one step, so dragging a slider doesn't use up your whole history. Making a new edit after undoing clears anything you could have redone.

### 1.7 Arrangement and Launcher

Pooly gives you two complementary views of the same project. The **Launcher** is a session-style grid: tracks run one way, scenes the other, and each cell holds a clip you trigger in real time. It's the starting view when you open a project.

<figure class="manual-media" data-wrap="right">
	<img
		src="/images/application-screenshots/arranger%20%2B%20launcher.png"
		alt="Pooly launcher and arranger views showing clip-based and timeline workflows."
		width="1929"
		height="1312"
		loading="lazy"
	/>
	<figcaption>
		Launcher and Arranger are two views of the same song: live grid performance and timeline structure.
	</figcaption>
</figure>

The **Arranger** is a linear timeline where clips sit at positions in time. Switch between launcher and arrangement with the **Launcher / Arrangement** button in the header. Time can run left to right or top to bottom; by default it follows your device's orientation, and you can set the direction for each view in Settings under **App → Time Axis Orientation**. The arrangement has a draggable playhead and loop controls.

Both views share the same project. Launcher clips and arranger clips are separate, but they can play the same patterns. Long-press a clip in either view for options such as edit, clone, duplicate, rename, linked editing, and delete. A pattern dock in the Arranger gives quick access to your patterns while editing the timeline.

### 1.8 Detail View

Detail View is Pooly's deep editing view for a selected track and clip. It opens when you edit a clip from the launcher or arrangement, and it adapts to the track. On instrument tracks you get a piano roll, performance pads, and instrument controls; on audio tracks the wave editor and clip controls replace the note editor.

<figure class="manual-media" data-wrap="right">
	<img
		src="/images/application-screenshots/detail.png"
		alt="Pooly Clip Detail view showing voice controls and drum clip slots."
		width="686"
		height="1029"
		loading="lazy"
	/>
	<figcaption>
		Clip Detail combines clip editing, voice controls, and instrument shaping in one screen.
	</figcaption>
</figure>

A device bar along the top picks what you're editing, the instrument, or any effect on the track, and the pages below it show that device's controls, such as voices, modulators, filters, and envelopes. Panels can expand to fill the view for focused editing. Open the **Browser** to swap sounds or add effects.

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
		Tracks define where sounds live and how clips route through instruments, effects, and the mixer.
	</figcaption>
</figure>

Every project also has a **Main** track. Each track plays through it on the way to your speakers, so effects you add to Main shape the whole mix. Main lives in the Mixer; it doesn't hold clips.

When you load an instrument, the track name updates to match unless you've renamed it yourself. In the Launcher, Arranger, and Mixer, track headers show the track name, a track output indicator, and track icon (set by the first device loaded on a midi track, or fixed for audio tracks); long-press a header for actions such as fold, stop, change color, move, duplicate, and delete. Add tracks with the **MIDI** and **Audio** buttons at the edge of the launcher or mixer, or the add-track button in the Arranger. Reordering tracks updates every view together.

### 1.10 Audio and MIDI

Pooly works with two fundamentally different kinds of musical material. **Audio** is recorded sound. It can come from imported WAV, OGG, or MP3 files, recordings, or audio resampled inside the app. **MIDI** is performance data: instructions like "play this pitch at this time with this velocity," closer to a score than a recording. MIDI by itself makes no sound; an instrument on the track has to play it.

MIDI tracks turn notes into sound through instruments such as FM synths, samplers, or drum kits. A sampler maps notes across one or many sounds; a drum kit gives each pad its own sound. Audio tracks skip that step and play their recordings directly, with clip controls for gain, pan, and warping to fit the project tempo.

The track kind decides what it can hold: note clips go on MIDI tracks and audio clips on audio tracks. Detail View adapts to match—piano roll and performance pads for MIDI, the wave editor and clip controls for audio.

### 1.11 Clips, Patterns, and Scenes

Pooly separates *what you wrote* from *where it plays*. A **pattern** is the musical content: notes on a MIDI track, or a recording on an audio track. A **clip** places a pattern on a track, either in the Launcher grid or on the Arranger timeline. Several clips can share one pattern; with linked editing on, changing one changes them all.

**Scenes** are the rows of the Launcher. Each scene holds one slot per track; launching a scene triggers every clip in that row together, which is useful for song sections and live performance. Turn the scene buttons on or off in Settings under **App → Show Scene Launcher**. Scene launches wait for the next musical boundary so transitions land in time.

 You edit notes or audio in Detail View, working on the pattern. You launch and arrange music by working with clips, moving them in the launcher, placing them on the timeline, or triggering scenes.

### 1.12 Clips

A clip connects a pattern to a place in your project. **Launcher** clips live in the Clip Launcher grid, and **arranger** clips sit on the timeline.

Each clip decides how much of its pattern plays and whether it loops. Audio clips also keep their own gain, pan, and warp settings, so two clips playing the same recording can sound different.

Clips can have their own name and color. **Linked Editing** (in the clip's long-press menu) controls whether edits to the clip's pattern reach other clips that share it. When linked editing is off, Pooly gives the clip its own copy the first time you edit it.

### 1.13 MIDI Patterns

A MIDI pattern holds the notes for a MIDI track. Each with a pitch, position, length, and velocity—along with the length of the loop it plays.

Patterns remember how you were viewing them in the piano roll, such as scroll and zoom. Smart quantize nudges note starts toward the previous grid step rather than the nearest one. Patterns can also carry their own key and scale, overriding the song's for that clip.

Patterns can hold their own **automation lanes**, so parameter moves travel with the notes they belong to.

### 1.14 Audio Patterns

An audio pattern is a recording that plays as clip content on an audio track, along with settings such as gain, pan, pitch, and warp mode.

Warp mode controls how audio stretches to follow the project tempo. Choose from **Off**, **Repitch**, **Beats**, **Tones**, **Texture**, and **Complex** in the clip controls. Pooly detects a file's tempo when you load it, and warp markers let you pin moments in the recording to beats on the timeline. Audio patterns can also carry automation for clip settings over time.

Unlike MIDI patterns, audio patterns don't contain notes. Detail View's wave editor is where you view, trim, and loop them.

### 1.15 Devices

Devices are the building blocks of sound in Pooly. Each track has a chain of devices: **instruments** that turn notes into sound, **racks** that hold other devices, and **audio effects** that process the sound afterward.

Instruments include **synths** and **samplers**. **Drum racks** give each pad its own device, while **instrument racks** layer several instruments together. Audio effects include reverb, delay, chorus, filters, distortion, compression, EQ, and more.

Sound flows from your notes through the instrument, then through any effects, then through the track's mixer strip and on to Main. Open the **Device Graph** from the header to see a track's whole chain at once—drag devices to reorder them, or build racks to layer sounds. You browse and swap instruments and effects from Pooly's Browser.

### 1.16 Presets

Presets are the saved sounds Pooly builds instruments from. Pooly ships with a large factory library of presets—FM voices, sampled instruments, drum kits, effects, and more.

You choose presets in the **Browser**. Pick a tab such as Instruments, Drums, or FX, narrow by category or search by name, and load a preset onto the selected track. Loading an instrument replaces the track's sound but keeps its mixer settings and effects. Any tweaks you make afterward are saved with your project, not the preset.

You can save your own presets from the instrument's core panel in Detail View.

### 1.17 Project Scale and Key

Every Pooly project has a root **key** and **scale**. These decide which note rows the piano roll offers and guide Pooly's editing helpers. Change them in Settings on the **Project** tab using the **Root Note** and **Scale** selectors. Changes apply right away and retune the MIDI throughout your project—and like everything else, they can be undone.

Individual MIDI patterns can also have their own key and scale. When a pattern has one, Detail View uses it for that clip; otherwise it uses the song's. This lets you write a passage in a borrowed mode without retuning the whole project.

### 1.18 Automation

Automation records how a parameter changes over time so your sound can evolve during playback without hands-on tweaking. Pooly stores automation in **lanes**, each targeting a control on a device, the mixer, or a clip. Lanes hold points placed in musical time.

Detail View shows automation with an automation bar and a lane overlay on the piano roll or wave editor: toggle the overlay, pick a lane, draw or edit points, mute lanes, or delete them.

You can also perform automation live—turn a control while the song plays, then commit it with the capture bar in the footer.

### 1.19 MIDI and Automation Capture

Capture is Pooly's always-listening record buffer. When you play notes on the pads or a MIDI controller, or turn a control during playback, Pooly holds onto what you played instead of writing it straight into the pattern.

As soon as there's something captured, a **capture bar** slides up from the footer. Tap the **capture** button to commit the notes or automation into the clip, or tap **✕** to throw the take away. If you stop playing for about a bar, Pooly pauses the take but keeps it, so nothing is lost. Capturing on an empty slot creates a new clip for you.
