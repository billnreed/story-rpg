import entryStyles from 'styles/entry';

import React from 'react';

import Choice from 'scripts/modules/choice/components/choice';

class ChoicesEntry extends React.Component {
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
    return this.props.choices.map((choice, i) => {
      return (
        <Choice
          label={choice.label}
          active={this.props.active}
          chosen={this.props.choice == choice.id}
          fn={choice.fn}
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
      <div className="entry">
        <div className="entry-text">{this.props.children}</div>
        <div className={entryActionClassNames.join(" ")}>
          {this.renderActions()}
        </div>
      </div>
    )
  }
}

ChoicesEntry.propTypes = {
  active: React.PropTypes.bool,
  choice: React.PropTypes.string,
  choices: React.PropTypes.array
}

export default ChoicesEntry;
