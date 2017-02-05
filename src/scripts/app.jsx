import 'styles/app';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import RoomView from 'scripts/modules/room/components/room-view'
import Log from 'scripts/modules/log/components/log'

class __App extends React.Component {
  static getStores() {}

  static getPropsFromStores() {}

  render() {
    return (
      <div className="app">
        <RoomView />
        <Log />
      </div>
    );
  }
}

export default __App;
