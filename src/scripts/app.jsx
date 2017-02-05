import 'styles/app';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import Room from 'scripts/modules/room/room'
import Log from 'scripts/modules/log/log'

class __App extends React.Component {
  static getStores() {}

  static getPropsFromStores() {}

  render() {
    return (
      <div className="app">
        <Room />
        <Log />
      </div>
    );
  }
}

// export default connectToStores(__App);
export default __App;
