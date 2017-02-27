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
    if (this.props.active) {
      LockPickActions.toggleSlot(this.props.lockPickKey, index);
    }
  }

  renderUnlocked() {
    if (this.props.isSolved) {
      return (
        <Choice
          active={this.props.active}
          label={this.props.choice.label}
          chosen={this.props.chosenId == this.props.choice.id}
          fn={this.props.choice.fn}
        />
      )
    }
  }

  renderSlots() {
    return this.props.slots.map((slot, i) => {
      const slotClassNames = `slot ${slot.selected ? "is-selected" : ""}`;

      return (
        <div className={slotClassNames} onClick={() => this.toggleSlot(i)} key={`${this.props.lockPickKey}-${i}`}></div>
      );
    });
  }

  render() {
    return (
      <div className="lock-pick">
        <div className="slots">
          {this.renderSlots()}
        </div>
        {this.renderUnlocked()}
      </div>
    )
  }
}

__LockPick.PropTypes = {
  lockPickKey: React.PropTypes.string.isRequired,
  choice: React.PropTypes.object.isRequired,
  active: React.PropTypes.bool.isRequired,
  chosenId: React.PropTypes.string.isRequired
}

export default connectToStores(__LockPick);
