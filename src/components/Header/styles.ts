import styled from "@emotion/styled";

import { Box, Typography } from "@mui/material";
import { Avatar } from "@mui/material";

export const StyledHeader = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;

  @media screen and (max-with: 375px) {
    background-color: #fff;
  }
`;

export const StyledIconHeader = styled(Avatar)`
  margin-left: 70px;
  margin-right: 20px;

  @media screen and (max-width: 375px) {
    margin-left: 30px;
  }
`;

export const WrapperText = styled(Typography)`
  display: flex;
`;

export const BoldTextBy = styled.span`
  font-weight: bold;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const BoldTextStudent = styled.span`
  font-weight: bold;

  @media screen and (max-width: 375px) {
    display: block;
    
    ::after {
      font-size: 20px;
      font-weight: 700;
  }
`;

export const BlueText = styled.span`
  color: #49c2e8;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const Space = styled.span`
  margin: 0 4px;
`;
