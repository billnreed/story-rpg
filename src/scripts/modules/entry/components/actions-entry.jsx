import entryStyles from 'styles/entry';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

class __ActionsEntry extends React.Component {
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

export default connectToStores(__ActionsEntry);
