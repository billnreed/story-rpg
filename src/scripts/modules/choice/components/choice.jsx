import choiceStyles from 'styles/choice';

import React from 'react';

class Choice extends React.Component {
  constructor(props) {
    super(props);

    this.doIfActive = this.doIfActive.bind(this);
  }

  render() {
    const classNames = `choice ${this.props.chosen ? 'is-chosen' : ''}`;

    return (
      <button
        className={classNames}
        onClick={() => this.doIfActive(this.props.fn)}
      >
        {this.props.label}
      </button>
    );
  }

  doIfActive(fn) {
    if (this.props.active) {
      fn();
    }
  }
}

Choice.PropTypes = {
  label: React.PropTypes.string,
  active: React.PropTypes.bool,
  chosen: React.PropTypes.bool,
  fn: React.PropTypes.func
}

export default Choice;
