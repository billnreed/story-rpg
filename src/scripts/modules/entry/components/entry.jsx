import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import entryStyles from 'styles/entry';

class __Entry extends React.Component {
  static getStores() {
    return [];
  }

  static getPropsFromStores() {
    return {};
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="entry">
        <p className="entry-text">{this.props.text}</p>
        <div className="entry-actions">
          {this.props.actions.map((action, i) => {
            return (
              <button
                className="entry-action"
                onClick={action.fn}
                key={i}
              >
                {action.label}
              </button>
            );
          })}
        </div>
      </div>
    )
  }
}

export default connectToStores(__Entry);
