import alt from 'scripts/alt';

import thiefStory from 'data/stories/thief';

// import testStory from 'data/stories/test';

import StoryActions from 'scripts/modules/story/actions/story-actions';

export default alt.createStore(class {
  constructor() {
    this.storyEntries = [thiefStory.beginning];
    thiefStory.beginning.active = true;

    this.bindListeners({handleChoose: StoryActions.CHOOSE});

    this.exportPublicMethods({
      getEntries: this.getEntries
    });
  }

  handleChoose(args) {
    const [source, target] = args;

    const lastEntry = this.storyEntries[this.storyEntries.length - 1];
    lastEntry.active = false;
    lastEntry.choice = source;

    const newEntry = thiefStory[target];
    newEntry.active = true;
    this.storyEntries.push(newEntry);
  }

  getEntries() {
    return this.getState().storyEntries;
  }
});
