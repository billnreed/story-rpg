import React from 'react';

import ActionsEntry from 'scripts/modules/entry/components/actions-entry';
import StoryActions from 'scripts/modules/story/actions/story-actions';

export default [
  <ActionsEntry
    key={1}
    text="You wake up in an empty room."
    actions={[
      {
        label: "Look around",
        fn: StoryActions.step
      }
    ]}
  />,
  <ActionsEntry
    key={2}
    text="Still empty."
    actions={[]}
  />
];
