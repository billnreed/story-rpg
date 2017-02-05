import 'styles/log';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import LogActions from 'scripts/modules/log/actions/log-actions';
import LogStore from 'scripts/modules/log/stores/log-store';

class Log extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores() {
    return [LogStore];
  }

  static getPropsFromStores() {
    return {
      messages: LogStore.getMessages()
    };
  }


  render() {
    return (
      <div className="log">
        <ul>
          {this.props.messages.map((message, i) => {
            return <li key={i}>{message}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default connectToStores(Log);
