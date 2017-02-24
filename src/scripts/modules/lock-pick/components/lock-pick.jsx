import lockPickStyles from 'styles/lock-pick';

import alt from 'scripts/alt';
import connectToStores from 'alt-utils/lib/connectToStores';

import React from 'react';

import Choice from 'scripts/modules/choice/components/choice';

import LockPickActions from 'scripts/modules/lock-pick/actions/lock-pick-actions';
import LockPickStore from 'scripts/modules/lock-pick/stores/lock-pick-store';

class __LockPick extends React.Component {
  static getStores() {
    return [LockPickStore];
  }

  static getPropsFromStores(props) {
    return {
      slots: LockPickStore.getSlots(props.lockPickKey),
      isSolved: LockPickStore.isSolved(props.lockPickKey)
    };
  }

  static componentDidConnect(props) {
    LockPickActions.generate(props.lockPickKey);
  }

  constructor(props) {
    super(props);

    this.toggleSlot = this.toggleSlot.bind(this);
  }

  toggleSlot(index) {
    LockPickActions.toggleSlot(this.props.lockPickKey, index);
  }

  renderUnlocked() {
    if (this.props.isSolved) {
      return (
        <Choice
          label="Open."
          active={this.props.active}
          chosen={this.props.choice}
          fn={this.props.fn}
        />
      )
    }
  }

  render() {
    return (
      <div className="lock-pick">
        <div className="slots">
          {this.props.slots.map((slot, i) => {
            let slotClassNames = ["slot"];
            if (slot.selected) {
              slotClassNames.push("is-selected");
            }
            slotClassNames = slotClassNames.join(" ");

            return (
              <div className={slotClassNames} onClick={() => this.toggleSlot(i)} key={`${this.props.lockPickKey}-${i}`}></div>
            );
          })}
        </div>
        {this.renderUnlocked()}
      </div>
    )
  }
}

__LockPick.PropTypes = {
  lockPickKey: React.PropTypes.string,
  fn: React.PropTypes.func,
  active: React.PropTypes.bool,
  choice: React.PropTypes.string
}

export default connectToStores(__LockPick);
