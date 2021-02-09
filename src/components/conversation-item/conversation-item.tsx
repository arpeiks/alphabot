import React from "react";

import { Root, Text, Badge, Avatar } from "./conversation-item.styles";

const ConversationItem = () => {
  return (
    <Root>
      <Avatar />
      <div style={{ display: "flex" }}>
        <div>
          <Text className="name">Fio Steinle</Text>
          <Text className="message">Good afternoon! How may....</Text>
        </div>
        <div
          style={{
            color: "grey",
            display: "flex",
            fontSize: "0.8rem",
            alignItems: "flex-end",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginBottom: "0.4rem" }}>2 hours ago</div>
          <Badge badgeContent={4} color="primary" />
        </div>
      </div>
    </Root>
  );
};

export default ConversationItem;
