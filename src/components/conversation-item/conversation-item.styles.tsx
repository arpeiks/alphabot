import styled from "styled-components";
import BaseBadge from "@material-ui/core/Badge";
import BaseAvatar from "@material-ui/core/Avatar";

export const Root = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1.3rem;
  }
`;

export const Avatar = styled(BaseAvatar)`
  && {
    width: 40px;
    height: 40px;
    margin-right: 0.8rem;
  }
`;

export const Text = styled.span`
  display: block;

  &.name {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  &.message {
    font-size: 0.8rem;
  }
`;

export const Badge = styled(BaseBadge)`
  .MuiBadge-root,
  .MuiBadge-badge {
    position: unset;
    transform: none;
  }
`;
