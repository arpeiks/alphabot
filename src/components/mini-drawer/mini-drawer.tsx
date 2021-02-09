import * as React from "react";
import ForumIcon from "@material-ui/icons/Forum";
import { NavLink, useLocation } from "react-router-dom";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";

import Icon from "../icon/icon";
import { Root } from "./mini-drawer.styles";

const MiniDrawer = () => {
  const { pathname } = useLocation();

  return (
    <Root>
      <span style={{ marginBottom: "3rem" }}>LOGO</span>
      <Icon
        to="/"
        component={NavLink}
        FilledIcon={ForumIcon}
        isActive={"/" === pathname}
        OutlinedIcon={ForumOutlinedIcon}
      />
    </Root>
  );
};

export default MiniDrawer;
