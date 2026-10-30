---
title: Troubleshooting
description: Fixes for common problems while using Pooly.
number: "9"
section: reference
order: 10
---

## 9.1 No sound

If you're not hearing anything, work through these checks:

1. Turn up your device volume and disable silent or focus modes
2. Press **Play** in the footer—clips and scenes need transport running unless **Auto Play on Trigger** is on in Settings
3. Open the **Mixer** and make sure the track isn't muted, nothing else is soloed, and both the track and **Main** faders are up
4. Confirm the clip has content—an empty pattern or missing audio file stays silent
5. In Settings → **Driver**, confirm an output device is selected

## 9.2 Audio glitches or crackling

Crackling usually means the device is struggling to keep up:

- Close other apps using audio or running heavy background tasks
- In Settings → **Driver**, try a larger buffer size
- Reduce the number of active tracks and effects while testing
- Restart Pooly after changing audio settings

## 9.3 Clips won't launch

If tapping a clip does nothing:

- Press **Play** first, or turn on **Auto Play on Trigger** in Settings → **App**
- Make sure the cell shows a clip—not an empty slot
- Try **Stop** from the clip's or track's long-press menu, then launch again
- Launch a **scene** to trigger a whole row at once as a test

## 9.4 Can't open or save a project

If a project fails to load or save:

- Check free storage on your device
- Confirm your save location in Settings → **App** is reachable (especially if you use a custom folder)
- Restart the app and try again
- Update Pooly if a newer version is available

## 9.5 Export problems

If export fails or the file sounds wrong:

- Check the **bar range** in the export dialog covers your arrangement
- Build the song on the **Arranger** timeline before exporting—export renders the timeline, so launcher-only clips won't be in the file
- Balance levels in the **Mixer** before exporting to avoid clipping
- Pick a valid save location when prompted

## 9.6 Undo went too far

Use **Redo** in the footer to step forward again. Pooly keeps a limited history—if you've made many edits since the change you want, you may need to redo it by hand. Duplicate a project from the Pools screen before risky experiments.

## 9.7 App crashes

If Pooly closes unexpectedly:

- Update to the latest version
- Reopen the project—Pooly autosaves as you work and will offer to restore your latest changes
- Note what you were doing and share steps on [Discord](https://discord.gg/zbNVJYBtw7) so the team can investigate
- Keep backups of your important `.pool` files

## 9.8 Still stuck?

Join the [Pooly Discord](https://discord.gg/zbNVJYBtw7) and describe your issue—what device you're on, what you tapped, and what you expected. Screenshots help.

## Related pages

- [1.1 Pooly Projects](/manual/core-concepts/#11-pooly-projects)
- [1.6 Undo History](/manual/core-concepts/#16-undo-history)
- [5 Mixer](/manual/views/mixer/)
