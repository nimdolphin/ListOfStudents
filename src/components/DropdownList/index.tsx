import React, { FC } from "react";
import { DropdownListProps, HandleDropdownList } from "./types";
import { Positions } from "components/Search/types";

import { CustomSelect, CustomMenuItem, CustomImage } from "./styles";

import dropdown from "images/dropdown.png";

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
      IconComponent={() => <CustomImage src={dropdown} alt="logo-drop" />}
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
