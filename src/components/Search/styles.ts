import styled from "@emotion/styled";

import { Box } from "@mui/material";

export const SearchBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const HeaderStudentBox = styled(Box)`
  padding-bottom: 30px;

  @media screen and (max-width: 375px) {
    padding-bottom: 0px;
  }
`;

export const StudentListBox = styled(Box)`
  padding-top: 10px;
  background-color: #fff;
`;
