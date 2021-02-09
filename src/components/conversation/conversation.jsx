import React from "react";
import AddIcon from "@material-ui/icons/Add";

import { Fab, Root } from "./conversation.styles";
import ConversationGroup from "../conversation-group/conversation-group";

const Conversation = () => {
  return (
    <Root>
      <ConversationGroup title="Personal" />
      <ConversationGroup title="Team" />

      <Fab color="secondary">
        <AddIcon />
      </Fab>
    </Root>
  );
};

export default Conversation;
