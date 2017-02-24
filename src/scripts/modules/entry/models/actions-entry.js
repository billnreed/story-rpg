import Entry from 'scripts/modules/entry/models/entry';

import ActionsEntryComponent from 'scripts/modules/entry/components/actions-entry';

export default class ActionsEntry extends Entry {
  constructor(id, entry) {
    super(id, entry, ActionsEntryComponent);
    this.actions = entry.actions;
  }
}
