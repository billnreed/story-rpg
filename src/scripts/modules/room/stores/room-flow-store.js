import alt from 'scripts/alt';

import RoomFlowActions from 'scripts/modules/room/actions/room-flow-actions';

import RoomFactory from 'scripts/modules/room/factories/room-factory';
import Room from 'scripts/modules/room/models/room';

export default alt.createStore(class {
  constructor() {
    this.room = null;
    this.roomState = null;

    this.bindListeners({
      handleTransitionToRoom: RoomFlowActions.TRANSITION_TO_ROOM,
      handleTransitionToState: RoomFlowActions.TRANSITION_TO_STATE
    })

    this.exportPublicMethods({
      getCurrentRoom: this.getCurrentRoom,
      getCurrentRoomState: this.getCurrentRoomState
    });
  }

  handleTransitionToRoom(roomKey) {
    this.room = RoomFactory.getRoom(roomKey);
    this.roomState = null;
  }

  handleTransitionToState(stateKey) {
    this.roomState = this.room.getRoomState(stateKey);
  }

  getCurrentRoom() {
    return this.getState().room;
  }

  getCurrentRoomState() {
    return this.getState().roomState;
  }

});
