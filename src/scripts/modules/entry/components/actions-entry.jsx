import entryStyles from 'styles/entry';
import actionEntryStyles from 'styles/actions-entry';

import React from 'react';

import Choice from 'scripts/modules/choice/components/choice';

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
      return (
        <Choice
          label={action.label}
          active={this.props.active}
          chosen={this.props.choice == action.id}
          fn={action.fn}
          key={i}
        />
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

ActionsEntry.propTypes = {
  active: React.PropTypes.bool,
  choice: React.PropTypes.string,
  actions: React.PropTypes.array
}

export default ActionsEntry;
