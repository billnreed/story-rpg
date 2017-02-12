import entryStyles from 'styles/entry';
import actionEntryStyles from 'styles/actions-entry';

import React from 'react';

class ActionsEntry extends React.Component {
  constructor(props) {
    super(props);

    this.doIfActive = this.doIfActive.bind(this);
  }

  doIfActive(fn) {
    if (this.props.active) {
      fn();
    }
  }

  renderActions() {
    return this.props.actions.map((action, i) => {
      let classNames = ["entry-action"];
      if (this.props.choice == action.id) {
        classNames.push("is-chosen");
      }

      return (
        <button
          className={classNames.join(" ")}
          onClick={() => this.doIfActive(action.fn)}
          key={i}
        >
          {action.label}
        </button>
      );
    });
  }

  render() {
    let entryActionClassNames = ["entry-actions"];
    if (!this.props.active) {
      entryActionClassNames.push("is-disabled");
    }
    return (
      <div className="entry actions-entry">
        <div className="entry-text">{this.props.children}</div>
        <div className={entryActionClassNames.join(" ")}>
          {this.renderActions()}
        </div>
      </div>
    )
  }
}

export default ActionsEntry;
