import alt from 'scripts/alt';

import LockPick from 'scripts/modules/lock-pick/models/lock-pick';

import LockPickActions from 'scripts/modules/lock-pick/actions/lock-pick-actions';

export default alt.createStore(class {
  constructor() {
    this.lockPicks = {};

    this.bindListeners({
      handleGenerate: LockPickActions.GENERATE,
      handleToggleSlot: LockPickActions.TOGGLE_SLOT,
      handleOpen: LockPickActions.OPEN
    });

    this.exportPublicMethods({
      getSlots: this.getSlots,
      isSolved: this.isSolved
    });
  }

  handleGenerate(key) {
    this.lockPicks[key] = new LockPick();
  }

  handleToggleSlot(args) {
    const [key, index] = args;
    this.lockPicks[key].toggleSlot(index);
  }

  handleOpen(key) {
    this.lockPicks[key].checkAttempt();
  }

  getSlots(key) {
    if (this.getState().lockPicks[key]) {
      return this.getState().lockPicks[key].getSlots();
    }

    return [];
  }

  isSolved(key) {
    if (this.getState().lockPicks[key]) {
      return this.getState().lockPicks[key].checkAttempt();
    }

    return false;
  }
});
