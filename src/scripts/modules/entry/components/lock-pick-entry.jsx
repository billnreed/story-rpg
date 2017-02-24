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
        choice={this.props.choice}
      >
        <LockPick
          active={this.props.active}
          choice={this.props.choice}
          lockPickKey={this.props.lockPickKey}
          fn={this.props.fn}
        />
      </Entry>
    );
  }
}

LockPickEntry.PropTypes = {
  lockPickKey: React.PropTypes.string.isRequired,
  fn: React.PropTypes.func.isRequired
}

export default LockPickEntry;
