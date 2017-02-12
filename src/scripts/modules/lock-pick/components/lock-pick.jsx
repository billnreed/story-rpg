import lockPickStyles from 'styles/lock-pick';

import alt from 'scripts/alt';
import connectToStores from 'alt-utils/lib/connectToStores';

import React from 'react';

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
        <button className="open-button" onClick={this.props.fn}>Open.</button>
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
              <div className={slotClassNames} onClick={() => this.toggleSlot(i)} key={`this.props.lockPickKey-${i}`}></div>
            );
          })}
        </div>
        {this.renderUnlocked()}
      </div>
    )
  }
}

export default connectToStores(__LockPick);
