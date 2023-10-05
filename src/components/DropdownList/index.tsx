import React, { FC } from "react";
import { CustomSelect, CustomMenuItem } from "./styles";
import { DropdownListProps, HandleDropdownList } from "./types";
import { Positions } from "components/Search/types";

import dropdown from "images/dropdown.png";

import "./styles.scss";

const newDropdownList = [
  { label: "Имя от А-Я", value: Positions.NameA },
  { label: "Имя от Я-А", value: Positions.NameYa },
  { label: "Сначала моложе", value: Positions.Youngest },
  { label: "Сначала старше", value: Positions.Oldest },
  { label: "Высокий рейтинг", value: Positions.HighRating },
  { label: "Низкий рейтинг", value: Positions.LowerRating },
];

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
      {newDropdownList.map((option) => (
        <CustomMenuItem key={option.value} value={option.value}>
          {option.label}
        </CustomMenuItem>
      ))}
    </CustomSelect>
  );
};

export default DropdownList;
