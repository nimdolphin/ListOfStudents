import React, { FC } from "react";
import { styled } from "@mui/system";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DropdownListProps, HandleDropdownList } from "./types";

import dropdown from "images/dropdown.png";

import "./styles.scss";

const CustomSelect = styled(Select)({
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
    height: "43px",
    backgroundColor: "#fff",
    padding: "0 8px",
    fontSize: "0",
  },
});

const CustomMenuItem = styled(MenuItem)({
  background: "white",
  color: "black",
  padding: "15px",
  fontSize: "16px",
  "&::before": {
    marginRight: "8px",
  },
});

const DropdownList: FC<DropdownListProps> = ({ sortOption, setSortOption }) => {
  const handleDropdownList: HandleDropdownList = (event) => {
    setSortOption(event.target.value as string);
  };

  return (
    <CustomSelect
      className="select-list"
      onChange={handleDropdownList}
      value={sortOption}
      IconComponent={() => (
        <img src={dropdown} className="drop-img" alt="logo-drop" />
      )}
    >
      <CustomMenuItem value="name-a-ya">Имя А-Я</CustomMenuItem>
      <CustomMenuItem value="name-ya-a">Имя Я-А</CustomMenuItem>
      <CustomMenuItem value="youngest">Сначала моложе</CustomMenuItem>
      <CustomMenuItem value="oldest">Сначала старше</CustomMenuItem>
      <CustomMenuItem value="high-rating">Высокий рейтинг</CustomMenuItem>
      <CustomMenuItem value="lower-rating">Низкий рейтинг</CustomMenuItem>
    </CustomSelect>
  );
};

export default DropdownList;
