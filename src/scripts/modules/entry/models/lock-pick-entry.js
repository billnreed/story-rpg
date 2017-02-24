import Entry from 'scripts/modules/entry/models/entry';

import LockPickEntryComponent from 'scripts/modules/entry/components/lock-pick-entry';

export default class LockPickEntry extends Entry {
  constructor(entry) {
    super(entry, LockPickEntryComponent);
    this.lockPickKey = entry.lockPickKey;
    this.fn = entry.fn;
  }
}
