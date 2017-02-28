import StoryActions from 'scripts/modules/story/actions/story-actions';

export default class ChoiceFactory {
  static makeChoice(label, target) {
    const id = this._makeId(label, target);

    return {
      label,
      target,
      id,
      fn: () => {
        StoryActions.choose(id, target);
      }
    }
  }

  static makeChoiceAndRevealInventory(label, target) {
    const choice = this.makeChoice(label, target);
    const originalChoiceFn = choice.fn;
    
    choice.fn = () => {
      StoryActions.revealInventory();
      originalChoiceFn();
    }

    return choice;
  }

  static _makeId(label, target) {
    return this._slugify(label) + "-" + this._slugify(target);

  }

  static _slugify(string) {
    return string
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s/g, "-");
  }
}
