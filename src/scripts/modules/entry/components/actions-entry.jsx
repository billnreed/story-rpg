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

  renderActions() {
    return this.props.actions.map((action, i) => {
      let classNames = ["entry-action"];
      if (this.props.choiceIndex == i) {
        classNames.push("is-chosen");
      }
      return (
        <button className={classNames.join(" ")} onClick={action.fn} key={i}>
          {action.label}
        </button>
      );
    });
  }

  render() {
    return (
      <div className="entry">
        <p className="entry-text">{this.props.text}</p>
        <div className="entry-actions">
          {this.renderActions()}
        </div>
      </div>
    )
  }
}

export default connectToStores(__ActionsEntry);
