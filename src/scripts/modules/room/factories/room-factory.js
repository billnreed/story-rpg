import beginning from 'data/rooms/beginning';

import Room from 'scripts/modules/room/models/room';

class RoomFactory {
  constructor() {
    this.rooms = {
      beginning
    };
  }

  getRoom(key) {
    const rawRoom = this.rooms[key];
    return new Room(rawRoom);
  }
}

export default new RoomFactory();
