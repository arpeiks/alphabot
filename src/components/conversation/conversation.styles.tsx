import styled from "styled-components";
import BaseFab from "@material-ui/core/Fab";

export const Fab = styled(BaseFab)`
  && {
    width: 48px;
    right: 20px;
    bottom: 20px;
    height: 48px;
    position: absolute;
  }
`;

export const Root = styled.div`
  padding: 2em 1rem;
  position: relative;
  border-right: 1px solid rgb(0, 0, 0, 0.1);
`;
