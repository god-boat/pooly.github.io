---
title: Troubleshooting
description: Fixes for common problems while using Pooly.
number: "8.1"
section: reference
order: 10
---

## 8.1.1 No sound

If you're not hearing anything, work through these checks:

1. Turn up your device volume and disable silent or focus modes
2. Press **Play** in the footer—clips and scenes need transport running unless auto-play on clip trigger is enabled in Settings
3. Open the **Mixer** and make sure the track is not muted and the fader is up
4. Confirm the clip has content—an empty pattern or unloaded audio file stays silent
5. On the **Driver** settings tab, confirm an output device is selected

## 8.1.2 Audio glitches or crackling

Crackling usually means the device is struggling to keep up:

- Close other apps using the microphone or heavy background tasks
- In Settings → **Driver**, try a larger buffer size
- Reduce the number of active tracks and effects while testing
- Restart Pooly after changing audio settings

## 8.1.3 Clips won't launch

If tapping a clip does nothing:

- Press **Play** first, or enable **auto-play on clip trigger** on the Project settings tab
- Make sure the clip cell shows content—not an empty slot
- Try **Stop** on the track from a long-press menu, then launch again
- Launch a **scene** button to trigger a whole row at once as a test

## 8.1.4 Can't open or save a project

If a project fails to load or save:

- Check free storage on your device
- Confirm your save location in Settings → **Project** is reachable (especially if you use a custom folder)
- Restart the app and try again
- Update Pooly if a newer version is available

## 8.1.5 Export problems

If export fails or the file sounds wrong:

- Verify the **bar range** in the export dialog covers your arrangement
- Build the song on the **Arranger** timeline before exporting audio—launcher-only clips may not appear in the render range you expect
- Balance levels in the **Mixer** before exporting to avoid clipping
- For WAV export, pick a valid save location when prompted

## 8.1.6 Undo went too far

Use **Redo** in the footer to step forward again. Pooly keeps a limited history—if you've made many edits since the change you want, you may need to reapply it manually. Duplicate a project from the Projects screen before risky experiments, or restore from project backups.

## 8.1.7 App crashes

If Pooly closes unexpectedly:

- Update to the latest version
- Note what you were doing and share steps on [Discord](https://discord.gg/zbNVJYBtw7) so the team can investigate
- Try reopening the project—Pooly saves as you work, and keep backups of your important `.pool` files

## 8.1.8 Still stuck?

Join the [Pooly Discord](https://discord.gg/zbNVJYBtw7) and describe your issue—what device you're on, what you tapped, and what you expected. Screenshots help.

## Related pages

- [1.1 Pooly Projects](/manual/concepts/projects/)
- [1.17 Undo History](/manual/concepts/undo-history/)
- [5 Mixer](/manual/views/mixer/)
