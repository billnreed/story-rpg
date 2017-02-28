import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import storyStyles from 'styles/story';

import StoryStore from 'scripts/modules/story/stores/story-store';

class __Story extends React.Component {
  static getStores() {
    return [StoryStore];
  }

  static getPropsFromStores() {
    return {
      entries: StoryStore.getEntries(),
    };
  }

  componentDidUpdate() {
    const storyEl = document.querySelector('.story');
    storyEl.scrollTop = storyEl.scrollHeight;
  }

  constructor(props) {
    super(props);
  }

  renderEntries() {
    return this.props.entries.map((entry, i) => {
      return (
        <entry.Component {...entry} key={`entry-${i}`} />
      );
    });
  }

  renderEntryText(entry) {
    const textLines = entry.text;
    if (textLines) {
      return (
        textLines.map((line, i) => <p key={`entry-${entry.id}-line-${i}`}>{line}</p>)
      );
    }
  }

  render() {
    return (
      <div className="story">
        {this.renderEntries()}
      </div>
    )
  }
}

__Story.PropTypes = {
  entries: React.PropTypes.array.isRequired
}

export default connectToStores(__Story);
