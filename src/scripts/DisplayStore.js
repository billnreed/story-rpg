import alt from 'scripts/alt';
import DisplayActions from 'scripts/DisplayActions';

const DisplayStore = alt.createStore(class {
  constructor() {
    this.isVisible = false;

    this.bindAction(DisplayActions.SHOW, this.onShow);
    this.bindAction(DisplayActions.HIDE, this.onHide);

    this.exportPublicMethods({
      shouldShow: this.shouldShow
    });
  }

  onShow() {
    this.isVisible = true;
  }

  onHide() {
    this.isVisible = false;
  }

  shouldShow() {
    return this.getState().isVisible;
  }
});

export default DisplayStore;
