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
      ChoicesFactory.makeChoice("Open your eyes.", "openEyes")
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
      "You try to open the door, but it's locked from the other side. The stable boy must have come in last night and saw the door was unlocked. You're lucky that he didn't see you in the stall."
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
      'You pick the lock and the door swings open.',
      'Looking down the row, you see a few more horse stalls all locked tight. The door outside is slightly ajar.'
    ],
    choices: [
      ChoicesFactory.makeChoice("Go outside.", "goOutsideHorseStable")
    ]
  }),

  goOutsideHorseStable: new ChoicesEntry({
    text: [
      "The small farming village you live in is sprawled out in front of you. The horse stables sit on the edge of town by the only road that enters the village.",
      "Small homes and shops line the single road going straight through town. Where the road ends, the farming fields begin.",
      "The village is waking up as well. People are heading towards the fields and opening up their shops for the day.",
    ],
    choices: [
      ChoicesFactory.makeChoice("Walk into town.", "walkIntoTown")
    ]
  }),

  walkIntoTown: new ChoicesEntry({
    text: [
      "You take a deep breath of fresh air, and walk into town.",
      "Entering town, you walk past a food vendor setting up for the day. His back is turned to a pile of apples and your empty stomach rumbles.",
      "You also know of a patch of berries in the forest next to town where you could get a meal."
    ],
    choices: [
      ChoicesFactory.makeChoiceAndAddToInventory("Steal an apple.", "stealAnApple", 'apple'),
      ChoicesFactory.makeChoiceAndAddToInventory("Search for berries.", "searchForBerries", 'berries'),
    ]
  }),

  stealAnApple: new ChoicesEntry({
    text: [
      "You sneak up behind the food vendor and grab an apple. You quickly slip the apple into your pocket and walk further into town."
    ],
    choices: [
      ChoicesFactory.makeChoice("", "")
    ]
  }),

  searchForBerries: new ChoicesEntry({
    text: [
      "search for berries"
    ],
    choices: []
  })

};
