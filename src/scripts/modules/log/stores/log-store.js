import alt from 'scripts/alt';
import LogActions from 'scripts/modules/log/actions/log-actions';

export default alt.createStore(class {
  constructor() {
    this.messages = [];

    this.bindListeners({
      handlePush: LogActions.PUSH
    });

    this.exportPublicMethods({
      getMessages: this.getMessages
    });
  }

  handlePush(message) {
    this.messages.unshift(message);
  }

  getMessages() {
    return this.getState().messages;
  }
});
