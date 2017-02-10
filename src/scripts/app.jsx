import 'styles/app';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import Story from 'scripts/modules/story/components/story';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Story />
        {/* <Story /> */}
        {/* <Story /> */}
      </div>
    );
  }
}
