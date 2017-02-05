import LogActions from 'scripts/modules/log/actions/log-actions';
import RoomFlowActions from 'scripts/modules/room/actions/room-flow-actions';

export default class Room {
  constructor(room) {
    this.name = room.name;
    this.message = room.message;
    this.actions = room.actions;
  }

  getName() {
    return this.name;
  }

  getMessage() {
    return this.message;
  }

  getActions() {
    return this.actions;
  }
}
