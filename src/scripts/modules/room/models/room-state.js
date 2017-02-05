import LogActions from 'scripts/modules/log/actions/log-actions';
import RoomFlowActions from 'scripts/modules/room/actions/room-flow-actions';

export default class {
  constructor(key, roomState) {
    this.key = key;
    this.onEnterMessage = roomState.onEnterMessage;
    this.actions = roomState.actions.map(this.parseStateAction);
  }

  parseStateAction(jsonAction) {
    const label = jsonAction.label;
    const steps = jsonAction.steps;

    const executions = steps.map(step => {
      const stepType = step.type;

      if (stepType == "log") {
        return () => LogActions.push(step.message);
      } else if (stepType == "state-transition") {
        return () => RoomFlowActions.transitionToState(step.to)
      } else {
        return () => {}
      }
    });

    const execute = () => {
      executions.forEach(execution => execution());
    }

    return {
      label,
      execute
    };
  }

  getOnEnterMessage() {
    return this.onEnterMessage;
  }

  getActions() {
    return this.actions;
  }
}
