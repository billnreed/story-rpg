import React from 'react';

import entryStyles from 'styles/entry';
import lockPickEntryStyles from 'styles/lock-pick-entry';

import LockPick from 'scripts/modules/lock-pick/components/lock-pick';

export default class LockPickEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="entry lock-pick-entry">
        <LockPick lockPickKey={this.props.lockPickKey} fn={this.props.fn} />
      </div>
    )
  }
}
