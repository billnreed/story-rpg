export default class LockPick {
  constructor() {
    this.solution = [true, false, false];
    this.slots = [false, false, false];
  }

  getSlots() {
    const attempt = this.checkAttempt();

    return this.slots.map((slot, i) => {
      return {
        selected: slot,
      };
    });
  }

  toggleSlot(index) {
    this.slots[index] = !this.slots[index];
  }

  checkAttempt() {
    return this.slots.reduce((isCorrect, slot, i) => {
      return isCorrect && (slot == this.solution[i]);
    }, true);
  }
}
