import React, { FC, ChangeEvent } from "react";
import { StudentSearchProps } from "./types";

import "./styles.scss";

const StudentSearch: FC<StudentSearchProps> = ({
  searchName,
  setSearchText,
}) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-container">
      <span className="logo-icon"></span>
      <input
        type="text"
        placeholder="Поиск по имени"
        value={searchName}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default StudentSearch;
