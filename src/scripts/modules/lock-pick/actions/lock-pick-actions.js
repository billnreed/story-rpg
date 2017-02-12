import alt from 'scripts/alt';

export default alt.createActions(class {
  constructor() {
    this.generateActions("generate", "toggleSlot", "open")
  }
});
