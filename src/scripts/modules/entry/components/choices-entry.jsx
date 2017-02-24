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
          chosen={this.props.chosenId == choice.id}
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
        chosenId={this.props.chosenId}
        active={this.props.active}
      >
        {this.renderActions()}
      </Entry>
    )
  }
}

ChoicesEntry.propTypes = {
  active: React.PropTypes.bool.isRequired,
  chosenId: React.PropTypes.string.isRequired,
  choices: React.PropTypes.array.isRequired
}

ChoicesEntry.defaultProps = {
  chosenId: ""
}

export default ChoicesEntry;
