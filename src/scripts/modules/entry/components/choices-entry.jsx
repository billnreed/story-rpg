import entryStyles from 'styles/entry';

import React from 'react';

import Choice from 'scripts/modules/choice/components/choice';

class ChoicesEntry extends React.Component {
  constructor(props) {
    super(props);
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
    const entryClassNames = `entry ${!this.props.active ? 'is-disabled' : ''}`

    return (
      <div className={entryClassNames}>
        <div className="entry-text">{this.props.children}</div>
        {this.renderActions()}
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
