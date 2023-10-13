import React, { FC } from "react";

import {
  StyledHeader,
  StyledIconHeader,
  WrapperText,
  BoldTextStudent,
  BoldTextBy,
  BlueText,
  Space,
} from "./styles";

import circle from "images/circle.png";

const Header: FC = () => (
  <>
    <StyledHeader>
      <StyledIconHeader src={circle} alt="logo" />
      <WrapperText variant="h5">
        <BoldTextStudent>STUDENTS </BoldTextStudent>
        <Space />
        <BoldTextBy>by</BoldTextBy>
        <Space />
        <BlueText>github-user-name</BlueText>
      </WrapperText>
    </StyledHeader>
  </>
);

export default Header;
