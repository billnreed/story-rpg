import StoryActions from 'scripts/modules/story/actions/story-actions';

export default class ChoiceFactory {
  static makeChoice(label, target) {
    return {
      label,
      target,
      id: this._makeId(label, target),
      fn: StoryActions.choose
    }
  }

  static _makeId(label, target) {
    return this._slugify(label) + "-" + this._slugify(target);

  }

  static _slugify(string) {
    return string
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s/g, "-");
  }
}
