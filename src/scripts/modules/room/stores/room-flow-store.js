import alt from 'scripts/alt';

import Room from 'scripts/modules/room/models/room';

export default alt.createStore(class {
  constructor() {
    this.room = new Room();

    this.exportPublicMethods({
      getCurrentRoom: this.getCurrentRoom
    });
  }

  getCurrentRoom() {
    return this.getState().room;
  }

});
