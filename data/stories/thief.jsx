import React from 'react';

import ActionsEntry from 'scripts/modules/entry/models/actions-entry';
import LockPickEntry from 'scripts/modules/entry/models/lock-pick-entry';

import StoryActions from 'scripts/modules/story/actions/story-actions';

export default {
  beginning: new ActionsEntry({
    text: [
      'You wake up.'
    ],
    actions: [
      {
        id: "choose-open-your-eyes",
        label: "Open your eyes.",
        fn: () => StoryActions.choose("choose-open-your-eyes", "openEyes")
      }
    ],
  }),

  openEyes: new ActionsEntry({
    text: [
      'A streak of sunlight coming through a hole in the ceiling warms your face.',
      'Rubbing your eyes, you sit up from your makeshift bed of hay.'
    ],
    actions: [
      {
        id: "choose-look-around",
        label: "Look around.",
        fn: () => StoryActions.choose("choose-look-around", "lookAround")
      },
      {
        id: "choose-get-up",
        label: "Get up.",
        fn: () => StoryActions.choose("choose-get-up", "getUp")
      }
    ],
  }),

  lookAround: new ActionsEntry({
    text: [
      'Your neighbor from the stall next to you whinnies with the hope of being fed. Probably a sign that you should sneak out of the horse stable soon to avoid being found. It served well as shelter for the night, but nothing more.'
    ],
    actions: [
      {
        id: "choose-get-up",
        label: "Get up.",
        fn: () => StoryActions.choose("choose-get-up", "getUp")
      }
    ],
  }),

  getUp: new ActionsEntry({
    text: [
      'You stand up and brush the remnant strands of hay from your hair and clothes.',
      'The door of the horse stall you slept in is in front of you.'
    ],
    actions: [
      {
        id: "open-horse-stall-door",
        label: "Open the door.",
        fn: () => StoryActions.choose("open-horse-stall-door", "openHorseStallDoor")
      }
    ],
  }),

  openHorseStallDoor: new ActionsEntry({
    text: [
      "You try to open the door, but it is locked from the other side. The stable boy must have come in last night and saw the door was unlocked. You're lucky that he didn't see you in the stall. Can't be that sloppy next time."
    ],
    actions: [
      {
        id: "pick-horse-stall-door-lock",
        label: "Pick the lock.",
        fn: () => StoryActions.choose("pick-horse-stall-door-lock", "pickHorseStallDoorLock")
      }
    ],
  }),

  pickHorseStallDoorLock: new LockPickEntry({
    lockPickKey: "pick-horse-stall-door-lock",
    fn: () => StoryActions.choose("pick-horse-stall-door-lock", "unlockedHorseStallDoor")
  }),

  unlockedHorseStallDoor:  new ActionsEntry({
    text: [
      'You manage to pick the lock and the door swings open.'
    ],
    actions: []
  })

};
