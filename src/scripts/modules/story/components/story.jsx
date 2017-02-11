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
      choices: StoryStore.getChoices()
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="story">
        {this.props.entries.map((entry, i) => {
          return React.cloneElement(entry, {
            choiceIndex: this.props.choices[i]
          });
        })}
      </div>
    )
  }
}

export default connectToStores(__Story);
