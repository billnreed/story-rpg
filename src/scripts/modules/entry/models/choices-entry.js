import Entry from 'scripts/modules/entry/models/entry';

import ChoicesEntryComponent from 'scripts/modules/entry/components/choices-entry';

export default class ChoicesEntry extends Entry {
  constructor(entry) {
    super(entry, ChoicesEntryComponent);

    this.choices = this.parseChoices(entry.choices);
  }

  parseChoices(rawChoices) {
    return rawChoices.map(rawChoice => {
      return {
        id: rawChoice.id,
        label: rawChoice.label,
        fn: () => { rawChoice.fn(rawChoice.id, rawChoice.target) }
      }
    });
  }
}
