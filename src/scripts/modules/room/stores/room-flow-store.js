import alt from 'scripts/alt';

import RoomFactory from 'scripts/modules/room/factories/room-factory';
import Room from 'scripts/modules/room/models/room';

export default alt.createStore(class {
  constructor() {
    this.room = RoomFactory.getRoom('beginning');

    this.exportPublicMethods({
      getCurrentRoom: this.getCurrentRoom,
      getCurrentRoomState: this.getCurrentRoomState
    });
  }

  getCurrentRoom() {
    return this.getState().room;
  }

  getCurrentRoomState() {
    return this.getState().room.getRoomStates()["initial"];
  }

});
