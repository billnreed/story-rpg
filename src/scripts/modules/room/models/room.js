import LogActions from 'scripts/modules/log/actions/log-actions';
import RoomFlowActions from 'scripts/modules/room/actions/room-flow-actions';

import RoomState from 'scripts/modules/room/models/room-state';

export default class Room {
  constructor(room) {
    this.name = room.name;
    this.states = Object.keys(room.states).reduce((states, stateKey) => {
      states[stateKey] = new RoomState(stateKey, room.states[stateKey]);
      return states;
    }, {});
  }

  getName() {
    return this.name;
  }

  getRoomStates() {
    return this.states;
  }
}
