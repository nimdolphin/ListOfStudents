import styled from "@emotion/styled";

import { Box, TextField } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const SearchContainer = styled(Box)`
  position: relative;
  margin-bottom: 20px;
`;

export const SearchField = styled(TextField)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.default,
  maxWidth: "100%",
  border: "none",
  width: "940px",
  outline: "none",
  fontSize: "20px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none !important",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "#fff",
    maxWidth: "230px",
    borderRadius: "3px",
  },
}));
