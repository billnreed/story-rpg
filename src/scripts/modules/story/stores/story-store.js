import alt from 'scripts/alt';

import thiefStory from 'data/stories/thief';

import StoryActions from 'scripts/modules/story/actions/story-actions';

export default alt.createStore(class {
  constructor() {
    this.storyEntries = [thiefStory.beginning];
    thiefStory.beginning.active = true;

    this.inventoryRevealed = false;

    this.bindListeners({
      handleChoose: StoryActions.CHOOSE,
      handleRevealInventory: StoryActions.REVEAL_INVENTORY
    });

    this.exportPublicMethods({
      getEntries: this.getEntries,
      isInventoryRevealed: this.isInventoryRevealed
    });
  }

  handleChoose(args) {
    const [source, target] = args;

    const lastEntry = this.storyEntries[this.storyEntries.length - 1];
    lastEntry.active = false;
    lastEntry.chosenId = source;

    const newEntry = thiefStory[target];
    newEntry.active = true;
    this.storyEntries.push(newEntry);
  }

  handleRevealInventory() {
    this.inventoryRevealed = true;
  }

  getEntries() {
    return this.getState().storyEntries;
  }

  isInventoryRevealed() {
    return this.getState().inventoryRevealed;
  }
});
