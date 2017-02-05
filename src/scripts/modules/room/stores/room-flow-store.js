import alt from 'scripts/alt';

import RoomFactory from 'scripts/modules/room/factories/room-factory';
import Room from 'scripts/modules/room/models/room';

export default alt.createStore(class {
  constructor() {
    this.room = RoomFactory.getRoom('beginning');

    this.exportPublicMethods({
      getCurrentRoom: this.getCurrentRoom
    });
  }

  getCurrentRoom() {
    return this.getState().room;
  }

});
