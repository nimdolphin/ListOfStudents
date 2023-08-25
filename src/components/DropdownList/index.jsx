import React from "react";
import { styled } from "@mui/system";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CustomDropdownIcon from "../CustomDropdownIcon";

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

const DropdownList = ({ sortOption, setSortOption }) => {
  const handleDropdownList = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="dropdown">
      <CustomSelect
        className="select-list"
        onChange={handleDropdownList}
        value={sortOption}
        IconComponent={CustomDropdownIcon}
      >
        <CustomMenuItem value="name-a-ya">Имя А-Я</CustomMenuItem>
        <CustomMenuItem value="name-ya-a">Имя Я-А</CustomMenuItem>
        <CustomMenuItem value="youngest">Сначала моложе</CustomMenuItem>
        <CustomMenuItem value="oldest">Сначала старше</CustomMenuItem>
        <CustomMenuItem value="high-rating">Высокий рейтинг</CustomMenuItem>
        <CustomMenuItem value="lower-rating">Низкий рейтинг</CustomMenuItem>
      </CustomSelect>
    </div>
  );
};

export default DropdownList;
