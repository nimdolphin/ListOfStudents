import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const list = {
  listStyle: "none",

  "@media screen and (max-width: 375px)": {
    paddingTop: "0px",
  },
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

  "@media screen and (max-width: 375px)": {
    marginLeft: "68px",
    marginTop: "100px",
    position: "absolute",
    fontSize: "14px",
    "&::before": {
      content: '""',
      position: "absolute",
      left: "-10px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "4px",
      height: "4px",
      backgroundColor: "#49c2e8",
      borderRadius: "50%",
      display: "block",
    },
  },
};

export const groupItem = {
  marginLeft: "225px",
  marginTop: "20px",
  fontWeight: "500",

  "@media screen and (max-width: 375px)": {
    marginLeft: "68px",
    position: "absolute",
    fontSize: "14px",
    marginTop: "120px",
    "&::before": {
      content: '""',
      position: "absolute",
      left: "-10px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "4px",
      height: "4px",
      backgroundColor: "#49c2e8",
      borderRadius: "50%",
      display: "block",
    },
  },
};

export const ageItem = {
  marginLeft: "140px",
  marginTop: "20px",
  fontWeight: "500",

  "@media screen and (max-width: 375px)": {
    position: "absolute",
    marginLeft: "68px",
    marginTop: "80px",
    fontSize: "14px",
    "&::before": {
      content: '""',
      position: "absolute",
      left: "-10px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "4px",
      height: "4px",
      backgroundColor: "#49c2e8",
      borderRadius: "50%",
      display: "block",
    },
  },
};

export const ratingItem = {
  marginLeft: "170px",
  marginTop: "20px",
  fontWeight: "500",

  "@media screen and (max-width: 375px)": {
    marginLeft: "95px",
    marginTop: "42px",
    fontSize: "12px",
  },
};

export const raitingImg = {
  display: "none",

  "@media screen and (max-width: 375px)": {
    display: "flex",
    width: "7px",
    height: "7px",
    marginLeft: "80px",
    marginTop: "47px",
    position: "absolute",
  },
};

export const ColorItem = styled(Box)<{ color: string }>(({ color }) => ({
  borderRadius: "50%",
  marginTop: "12px",
  width: "40px",
  height: "40px",
  position: "absolute",
  marginLeft: "1100px",
  backgroundColor: color,

  "@media screen and (max-width: 375px)": {
    paddingTop: "0px",
    marginLeft: "60px",
    width: "10px",
    height: "10px",
    marginTop: "45px",
  },
}));

export const deleteBtn = {
  marginLeft: "1190px",
  marginTop: "-7px",
  position: "absolute",

  "@media screen and (max-width: 375px)": {
    paddingTop: "0px",
    marginLeft: "220px",
  },
};

export const line = {
  display: "none",

  "@media screen and (max-width: 375px)": {
    display: "flex",
    paddingTop: "40px",
    borderBottom: "9px solid #f2f2f2",
    width: "340px",
  },
};

export const thinLine = {
  display: "none",

  "@media screen and (max-width: 375px)": {
    display: "flex",
    marginBottom: "50px",
    borderBottom: "2px solid #f2f2f2",
    width: "340px",
  },
};
