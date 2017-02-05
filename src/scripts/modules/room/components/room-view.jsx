import roomViewStyles from 'styles/room-view';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import LogActions from 'scripts/modules/log/actions/log-actions';
import RoomFlowStore from 'scripts/modules/room/stores/room-flow-store';

class RoomView extends React.Component {
  static getStores() {
    return [RoomFlowStore];
  }

  static getPropsFromStores() {
    const currentRoom = RoomFlowStore.getCurrentRoom();
    const currentRoomState = RoomFlowStore.getCurrentRoomState();

    const name = currentRoom != null ? currentRoom.getName() : "";
    const actions = currentRoomState != null ? currentRoomState.getActions() : [];
    
    return {
      name,
      actions
    };
  }

  constructor(props) {
    super(props);
  }

  renderActions() {
    return (
      <div className="room-actions">
        {this.props.actions.map((action, i) => {
          return (
            <button key={i} onClick={action.execute} className="room-action">
              {action.label}
            </button>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="room-view">
        <h1 className="room-name">{this.props.name}</h1>
        {this.renderActions()}
      </div>
    )
  }
}

export default connectToStores(RoomView);
