import styled from "styled-components";
import BaseFab from "@material-ui/core/Fab";

export const Fab = styled(BaseFab)`
  && {
    top: 0px;
    z-index: 1;
    right: 0px;
    bottom: 0px;
    width: 48px;
    height: 48px;
    margin-left: 75%;
    position: sticky;
  }
`;

export const Root = styled.div`
  overflow-y: auto;
  padding: 2em 1rem;
  position: relative;
  border-right: 1px solid rgb(0, 0, 0, 0.1);
`;
