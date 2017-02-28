import inventoryStyles from 'styles/inventory';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import StoryStore from 'scripts/modules/story/stores/story-store';
import InventoryStore from 'scripts/modules/inventory/stores/inventory-store';

class __Inventory extends React.Component {
  static getStores() {
    return [InventoryStore, StoryStore];
  }

  static getPropsFromStores() {
    return {
      revealed: StoryStore.isInventoryRevealed(),
      items: InventoryStore.getItems()
    };
  }

  render() {
    if (this.props.revealed) {
      return (
        <div className="inventory">
          Inventory
          <ul>
            {this.props.items.map((item, i) => {
              return <li key={`inventory-${i}`}>{item}</li>
            })}
          </ul>
        </div>
      );
    }

    return null;
  }
}

export default connectToStores(__Inventory);
