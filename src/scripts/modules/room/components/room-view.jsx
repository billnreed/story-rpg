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

    return {name: currentRoom.getName(), message: currentRoom.getMessage(), actions: currentRoom.getActions()};
  }

  constructor(props) {
    super(props);
  }

  executeAction(action) {
    if (action.type == "log") {
      LogActions.push(action.message);
    }
  }

  renderActions() {
    return (
      <div>
        {this.props.actions.map((action, i) => {
          return (
            <button key={i} onClick={this.executeAction.bind(this, action)}>
              {action.text}
            </button>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.message}</p>
        {this.renderActions()}
      </div>
    )
  }
}

export default connectToStores(RoomView);
