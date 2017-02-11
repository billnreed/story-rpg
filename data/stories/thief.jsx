import React from 'react';

import ActionsEntry from 'scripts/modules/entry/components/actions-entry';
import StoryActions from 'scripts/modules/story/actions/story-actions';

export default {
  beginning: <ActionsEntry
    actions={[
      {
        label: "Look around",
        id: "choose-look-around",
        fn: () => StoryActions.choose("choose-look-around", "lookedAround")
      },
      {
        label: "Get up",
        id: "choose-get-up",
        fn: () => StoryActions.choose("choose-get-up", "gotUp")
      }
    ]}
  >
    <p>You wake up in an empty room.</p>
  </ActionsEntry>,
  lookedAround: <ActionsEntry
    actions={[]}
  >
    <p>Still empty.</p>
  </ActionsEntry>,
  gotUp: <ActionsEntry
    actions={[]}
  >
    <p>You stand up.</p>
  </ActionsEntry>
};
