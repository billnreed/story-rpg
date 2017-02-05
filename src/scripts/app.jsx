import 'styles/app';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import RoomFlowActions from 'scripts/modules/room/actions/room-flow-actions';

import RoomView from 'scripts/modules/room/components/room-view'
import Log from 'scripts/modules/log/components/log'

export default class extends React.Component {
  constructor(props) {
    super(props);

    RoomFlowActions.transitionToRoom('beginning');
    RoomFlowActions.transitionToState('initial');
  }

  render() {
    return (
      <div className="app">
        <RoomView />
        <Log />
      </div>
    );
  }
}
