import LogActions from 'scripts/modules/log/actions/log-actions';
import RoomFlowActions from 'scripts/modules/room/actions/room-flow-actions';

export default class Room {
  constructor() {
    this.name = "Empty room";
    this.message = "You wake up in an empty room.";
    this.actions = [
      {
        text: "Look around.",
        action: function() {
          LogActions.push("You look around and see a door behind you.");
        }
      }
    ];
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
