import styled from "@emotion/styled";

import { Typography } from "@mui/material";

export const TypographyTitle = styled(Typography)`
  margin-left: 30px;
  padding-top: 50px;
  font-size: 45px;
  font-weight: 600;

  @media screen and (max-width: 375px) {
    margin-left: 5px;
    padding-top: 30px;
    font-size: 30px;
  }
`;
