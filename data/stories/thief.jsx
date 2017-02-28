import React from 'react';

import ChoicesEntry from 'scripts/modules/entry/models/choices-entry';
import LockPickEntry from 'scripts/modules/entry/models/lock-pick-entry';

import ChoicesFactory from 'scripts/modules/choice/factories/choice-factory';

export default {
  beginning: new ChoicesEntry({
    text: [
      'You wake up.'
    ],
    choices: [
      ChoicesFactory.makeChoice("Open your eyes", "openEyes")
    ],
  }),

  openEyes: new ChoicesEntry({
    text: [
      'A streak of sunlight coming through a hole in the ceiling warms your face.',
      'Rubbing your eyes, you sit up from your makeshift bed of hay.'
    ],
    choices: [
      ChoicesFactory.makeChoice("Look around.", "lookAround"),
      ChoicesFactory.makeChoice("Get up.", "getUp")
    ],
  }),

  lookAround: new ChoicesEntry({
    text: [
      'Your neighbor from the stall next to you whinnies with the hope of being fed. Probably a sign that you should sneak out of the horse stables soon to avoid being found. It served well as shelter for the night, but nothing more.'
    ],
    choices: [
      ChoicesFactory.makeChoice("Get up.", "getUp")
    ],
  }),

  getUp: new ChoicesEntry({
    text: [
      'You stand up and brush the remnant strands of hay from your hair and clothes.',
      'The door of the horse stall you slept in is in front of you.'
    ],
    choices: [
      ChoicesFactory.makeChoice("Open the door.", "openHorseStallDoor")
    ],
  }),

  openHorseStallDoor: new ChoicesEntry({
    text: [
      "You try to open the door, but it is locked from the other side. The stable boy must have come in last night and saw the door was unlocked. You're lucky that he didn't see you in the stall."
    ],
    choices: [
      ChoicesFactory.makeChoice("Pick the lock.", "pickHorseStallDoorLock")
    ],
  }),

  pickHorseStallDoorLock: new LockPickEntry({
    lockPickKey: "pick-horse-stall-door-lock",
    choice: ChoicesFactory.makeChoice("Open.", "unlockedHorseStallDoor")
  }),

  unlockedHorseStallDoor: new ChoicesEntry({
    text: [
      'You manage to pick the lock and the door swings open.'
    ],
    choices: []
  })

};
