import React from 'react';

import Entry from 'scripts/modules/entry/components/entry';
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
    return (
      <Entry
        text={this.props.text}
        choice={this.props.choice}
        active={this.props.active}
      >
        {this.renderActions()}
      </Entry>
    )
  }
}

ChoicesEntry.propTypes = {
  active: React.PropTypes.bool,
  choice: React.PropTypes.string,
  choices: React.PropTypes.array
}

export default ChoicesEntry;
