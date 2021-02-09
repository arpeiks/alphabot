import React from "react";
import TextField from "@material-ui/core/TextField";

import { Root } from "./textbox.styles";

const TextBox = () => {
  return (
    <Root>
      <TextField fullWidth variant="standard" />
    </Root>
  );
};

export default TextBox;
