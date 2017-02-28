import Entry from 'scripts/modules/entry/models/entry';

import ChoicesEntryComponent from 'scripts/modules/entry/components/choices-entry';

export default class ChoicesEntry extends Entry {
  constructor(entry) {
    super(entry, ChoicesEntryComponent);

    this.choices = entry.choices;
  }
}
