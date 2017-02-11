import alt from 'scripts/alt';

import thiefStory from 'data/stories/thief';

import StoryActions from 'scripts/modules/story/actions/story-actions';

export default alt.createStore(class {
  constructor() {
    this.progressIndex = 1;
    this.storyChoices = [];

    this.bindListeners({handleChoose: StoryActions.CHOOSE});

    this.exportPublicMethods({
      getEntries: this.getEntries,
      getChoices: this.getChoices
    });
  }

  handleChoose(choiceIndex) {
    this.storyChoices.push(choiceIndex);
    this.progressIndex++;
  }

  getEntries() {
    return thiefStory.slice(0, this.getState().progressIndex)
  }

  getChoices() {
    return this.getState().storyChoices;
  }

  getStory() {
    const entries = this.getEntries();
    const choices = this.getChoices();
  }
});
