import alt from './alt';

const DisplayActions = alt.createActions(class {
  constructor() {
    this.generateActions(
      "show",
      "hide",
    );
  }
});

export default DisplayActions;
