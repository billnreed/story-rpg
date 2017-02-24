import entryStyles from 'styles/entry';

import React from 'react';

class Entry extends React.Component {
  render() {
    const entryClassNames = `entry ${!this.props.active ? 'is-disabled' : ''}`

    return (
      <div className={entryClassNames}>
        {this.renderEntryText()}
        {this.props.children}
      </div>
    );
  }

  renderEntryText() {
    if (this.props.text) {
      return (
        <div className="entry-text">
          {this.props.text.map((line, i) => <p key={`entry-text-${i}`}>{line}</p>)}
        </div>
      );
    }
  }
}

Entry.PropTypes = {
  text: React.PropTypes.array,
  active: React.PropTypes.bool,
  choice: React.PropTypes.string,
}

export default Entry;
