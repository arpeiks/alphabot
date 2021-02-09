import React from "react";

import { Root } from "./icon.styles";

interface Props {
  to: string;
  isActive: boolean;
  component: React.ElementType;
  FilledIcon: React.ElementType;
  OutlinedIcon: React.ElementType;
}

const Icon: React.FC<Props> = ({
  isActive,
  FilledIcon,
  OutlinedIcon,
  ...props
}) => {
  return <Root {...props}>{isActive ? <FilledIcon /> : <OutlinedIcon />}</Root>;
};

export default Icon;
