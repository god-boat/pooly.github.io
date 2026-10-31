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
2. Press **Play** in the footer. Clips and scenes need the transport running unless **Auto Play on Trigger** is on in Settings
3. Open the **Mixer** and make sure the track isn't muted, nothing else is soloed, and both the track and **Main** faders are up
4. Check that the clip has content. An empty pattern or a missing audio file plays nothing
5. In Settings → **Driver**, confirm an output device is selected

## 9.2 Audio glitches or crackling

Crackling usually means your device can't keep up:

- Close other apps using audio or running heavy background tasks
- In Settings → **Driver**, try a larger buffer size
- Reduce the number of active tracks and effects while testing
- Restart Pooly after changing audio settings

## 9.3 Clips won't launch

If tapping a clip does nothing:

- Press **Play** first, or turn on **Auto Play on Trigger** in Settings → **App**
- Make sure the cell has a clip in it
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
- Export renders the **Arranger** timeline, so clips that only exist in the launcher won't be in the file
- Balance levels in the **Mixer** before exporting to avoid clipping
- Pick a valid save location when prompted

## 9.6 Undo went too far

Use **Redo** in the footer to step forward again. Redo only works until you make a new edit. After that, the steps you undid are gone and you'll have to redo them by hand. Duplicate a project from the Pools screen before you try anything risky.

## 9.7 App crashes

If Pooly closes unexpectedly:

- Update to the latest version
- Reopen the project. Pooly autosaves as you work and will offer to restore the autosaved copy
- Write down what you were doing and post the steps on [Discord](https://discord.gg/zbNVJYBtw7) so the team can track it down
- Keep backups of your important `.pool` files

## 9.8 Still stuck?

Join the [Pooly Discord](https://discord.gg/zbNVJYBtw7) and describe the problem: what device you're on, what you tapped, and what you expected to happen. Screenshots help.

## Related pages

- [1.1 Pooly Projects](/manual/core-concepts/#11-pooly-projects)
- [1.6 Undo History](/manual/core-concepts/#16-undo-history)
- [5 Mixer](/manual/views/mixer/)
