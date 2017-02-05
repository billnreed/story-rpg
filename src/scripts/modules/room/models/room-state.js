import LogActions from 'scripts/modules/log/actions/log-actions';

export default class {
  constructor(key, roomState) {
    this.key = key;
    this.message = roomState.message;
    this.actions = roomState.actions.map(this.parseStateAction);
  }

  parseStateAction(jsonAction) {
    if (jsonAction.type == "log") {
      return {
        text: jsonAction.text,
        execute: () => {
          LogActions.push(jsonAction.message);
        }
      }
    } else {
      return {text: jsonAction.text}
    }
  }
}
