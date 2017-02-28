import inventoryStyles from 'styles/inventory';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import InventoryStore from 'scripts/modules/inventory/stores/inventory-store';

class __Inventory extends React.Component {
  static getStores() {
    return [InventoryStore];
  }

  static getPropsFromStores() {
    return {
      items: InventoryStore.getItems()
    };
  }

  renderContent() {
    return (
      <ul>
        {this.props.items.map((item, i) => {
          return <li key={`inventory-${i}`}>{item}</li>
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="inventory">
        {this.renderContent()}
      </div>
    );
  }
}

export default connectToStores(__Inventory);
