import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import LogActions from 'scripts/modules/log/actions/log-actions';

class Room extends React.Component {
  static getStores() {
    return [];
  }

  static getPropsFromStores() {
    return {};
  }

  constructor(props) {
    super(props);

    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    LogActions.push('hello from an empty room');
  }

  render() {
    return (
      <div>
        <h1>Empty Room</h1>
        <button onClick={this.sayHello}>Say hello</button>
      </div>
    )
  }
}

export default connectToStores(Room);
