import { styled } from "@mui/system";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const CustomSelect = styled(Select)({
  width: "250px",
  height: "55px",
  fontSize: "16px",
  border: "none",
  outline: "none",
  background: "none",
  WebkitAppearance: "none",
  backgroundColor: "#fff",
  "&:focus": {
    boxShadow: "none",
    border: "none",
  },

  "@media screen and (max-width: 375px)": {
    width: "60px",
    backgroundColor: "#fff",
    padding: "0 8px",
    fontSize: "0",
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none !important",
  },
});

export const CustomMenuItem = styled(MenuItem)({
  background: "white",
  color: "black",
  padding: "15px",
  fontSize: "16px",
  "&::before": {
    marginRight: "8px",
  },
});

export const CustomImage = styled("img")({
  marginRight: "7px",

  "@media (max-width: 375px)": {
    marginLeft: "-30px",
  },
});
