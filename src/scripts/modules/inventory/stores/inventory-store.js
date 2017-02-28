import alt from 'scripts/alt';

import InventoryActions from 'scripts/modules/inventory/actions/inventory-actions';

export default alt.createStore(class {
  constructor() {
    this.items = [];

    this.bindListeners({
      handleAdd: InventoryActions.ADD
    });

    this.exportPublicMethods({
      getItems: this.getItems,
    });
  }

  handleAdd(item) {
    this.items.push(item);
  }

  getItems() {
    return this.getState().items;
  }
});
