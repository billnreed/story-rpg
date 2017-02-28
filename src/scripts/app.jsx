import 'styles/app';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import Story from 'scripts/modules/story/components/story';
import Inventory from 'scripts/modules/inventory/components/inventory';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Story />
        <Inventory />
      </div>
    );
  }
}
