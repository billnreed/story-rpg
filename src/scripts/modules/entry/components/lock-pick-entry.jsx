import React from 'react';

import Entry from 'scripts/modules/entry/components/entry';
import LockPick from 'scripts/modules/lock-pick/components/lock-pick';

class LockPickEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Entry
        active={this.props.active}
        chosenId={this.props.chosenId}
      >
        <LockPick
          active={this.props.active}
          chosenId={this.props.chosenId}
          choice={this.props.choice}
          lockPickKey={this.props.lockPickKey}
          fn={this.props.fn}
        />
      </Entry>
    );
  }
}

LockPickEntry.PropTypes = {
  active: React.PropTypes.bool.isRequired,
  chosenId: React.PropTypes.string.isRequired,
  lockPickKey: React.PropTypes.string.isRequired,
  choice: React.PropTypes.object.isRequired
}

export default LockPickEntry;
