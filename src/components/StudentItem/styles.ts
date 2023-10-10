import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const list = {
  listStyle: "none",
};

export const container = {
  display: "flex",
  justifyContent: "space-between",
};

export const avatarName = {
  display: "flex",
};

export const photo = {
  width: "50px",
  height: "50px",
  objectFit: "cover",
  borderRadius: "50%",
  overflow: "hidden",
};

export const surname = {
  marginLeft: "10px",
  marginTop: "9px",
  fontWeight: "500",
};

export const infoStudent = {
  marginTop: "-60px",
  display: "flex",
  justifyContent: "space-between",
};

export const specialtyItem = {
  marginLeft: "280px",
  marginTop: "20px",
  fontWeight: "500",
};

export const groupItem = {
  marginLeft: "225px",
  marginTop: "20px",
  fontWeight: "500",
};

export const ageItem = {
  marginLeft: "140px",
  marginTop: "20px",
  fontWeight: "500",
};

export const ratingItem = {
  marginLeft: "170px",
  marginTop: "20px",
  fontWeight: "500",
};

export const ColorItem = styled(Box)<{ color: string }>(({ color }) => ({
  borderRadius: "50%",
  marginTop: "12px",
  width: "40px",
  height: "40px",
  position: "absolute",
  marginLeft: "1100px",
  backgroundColor: color,
}));

export const deleteBtn = {
  marginLeft: "1190px",
  marginTop: "-7px",
  position: "absolute",
};
