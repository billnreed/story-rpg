import StoryActions from 'scripts/modules/story/actions/story-actions';

export default class {
  constructor(entry) {
    this.text = entry.text;
    this.actions = entry.actions.map(action => {
      return {
        label: action.label,
        fn: StoryActions.step
      }
    })
  }

  getText() {
    return this.text;
  }

  getActions() {
    return this.actions;
  }
}
