import React, { FC } from "react";
import { CustomSelect, CustomMenuItem } from "./styles";
import { DropdownListProps, HandleDropdownList } from "./types";
import { Positions } from "components/Search/types";

import dropdown from "images/dropdown.png";

import "./styles.scss";

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
      <CustomMenuItem value={Positions.NameA}>Имя А-Я</CustomMenuItem>
      <CustomMenuItem value={Positions.NameYa}>Имя Я-А</CustomMenuItem>
      <CustomMenuItem value={Positions.Oldest}>Сначала моложе</CustomMenuItem>
      <CustomMenuItem value={Positions.Youngest}>Сначала старше</CustomMenuItem>
      <CustomMenuItem value={Positions.HighRating}>
        Высокий рейтинг
      </CustomMenuItem>
      <CustomMenuItem value={Positions.LowerRating}>
        Низкий рейтинг
      </CustomMenuItem>
    </CustomSelect>
  );
};

export default DropdownList;
