import React from 'react';

import ActionsEntry from 'scripts/modules/entry/components/actions-entry';
import StoryActions from 'scripts/modules/story/actions/story-actions';

export default {
  beginning: <ActionsEntry
    text="You wake up in an empty room."
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
  />,
  lookedAround: <ActionsEntry
    text="Still empty."
    actions={[]}
  />,
  gotUp: <ActionsEntry
    text="You stand up."
    actions={[]}
  />
};
