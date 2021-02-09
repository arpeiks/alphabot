import styled from "styled-components";

export const Root = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Title = styled.span`
  color: #6d6969;
  display: block;
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;
