import styled from "@emotion/styled";

import { Box } from "@mui/material";

export const SearchBox = styled(Box)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    margin-left: 30px;
  }
`;

export const HeaderStudentBox = styled(Box)`
  padding-bottom: 30px;
`;

export const StudentListBox = styled(Box)`
  padding-top: 10px;
  background-color: #fff;

  @media screen and (max-width: 375px) {
    margin-left: -20px;
    margin-right: -20px;
    margin-top: -70px;
  }
`;
