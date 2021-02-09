import React from "react";

import { Root, Title } from "./conversation-group.styles";
import ConversationItem from "../conversation-item/conversation-item";

interface Props {
  title: string;
}

const ConversationGroup: React.FC<Props> = ({ title }) => {
  return (
    <Root>
      <Title>{title}</Title>
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
    </Root>
  );
};

export default ConversationGroup;
