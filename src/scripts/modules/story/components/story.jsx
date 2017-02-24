import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import storyStyles from 'styles/story';

import ActionsEntry from 'scripts/modules/entry/components/actions-entry';

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

  constructor(props) {
    super(props);
  }

  renderEntries() {
    return this.props.entries.map((entry, i) => {
      return (
        <entry.Component {...entry} key={`entry-${i}`}>
          {this.renderEntryText(entry)}
        </entry.Component>
      )
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
  entries: React.PropTypes.array,
  choices: React.PropTypes.array
}

export default connectToStores(__Story);
