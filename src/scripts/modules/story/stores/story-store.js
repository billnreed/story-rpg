import alt from 'scripts/alt';

import thiefStory from 'data/stories/thief';

import StoryActions from 'scripts/modules/story/actions/story-actions';

export default alt.createStore(class {
  constructor() {
    this.storyEntries = [thiefStory.beginning];
    this.storyChoices = [];

    this.bindListeners({handleChoose: StoryActions.CHOOSE});

    this.exportPublicMethods({
      getEntries: this.getEntries,
      getChoices: this.getChoices
    });
  }

  handleChoose(args) {
    const [source, target] = args;
    
    this.storyChoices.push(source);
    this.storyEntries.push(thiefStory[target]);
  }

  getEntries() {
    return this.getState().storyEntries;
  }

  getChoices() {
    return this.getState().storyChoices;
  }
});
