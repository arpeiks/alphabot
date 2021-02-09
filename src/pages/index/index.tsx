import React from "react";

import { Root } from "./index.styles";
import MiniDrawer from "../../components/mini-drawer/mini-drawer";
import Conversation from "../../components/conversation/conversation";

const Index = () => {
  return (
    <Root>
      <MiniDrawer />
      <Conversation />
    </Root>
  );
};

export default Index;
