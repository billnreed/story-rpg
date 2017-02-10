import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import storyStyles from 'styles/story';

import Entry from 'scripts/modules/entry/components/entry';

import StoryStore from 'scripts/modules/story/stores/story-store';

class __Story extends React.Component {
  static getStores() {
    return [StoryStore];
  }

  static getPropsFromStores() {
    return {
      entries: StoryStore.getEntries()
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="story">
        {this.props.entries.map((entry, i) => {
          return (
            <Entry
              text={entry.getText()}
              actions={entry.getActions()}
              key={i}
            />
          );
        })}
      </div>
    )
  }
}

export default connectToStores(__Story);
