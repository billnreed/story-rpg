import React from 'react';

import entryStyles from 'styles/entry';

import LockPick from 'scripts/modules/lock-pick/components/lock-pick';

class LockPickEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="entry lock-pick-entry">
        <LockPick
          active={this.props.active}
          choice={this.props.choice}
          lockPickKey={this.props.lockPickKey}
          fn={this.props.fn}
        />
      </div>
    );
  }
}

LockPickEntry.PropTypes = {
  lockPickKey: React.PropTypes.string,
  fn: React.PropTypes.func
}

export default LockPickEntry;
