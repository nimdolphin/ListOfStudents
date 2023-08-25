import React from "react";
import "./styles.scss";

const StudentSearch = ({ searchName, setSearchText }) => {
  const handleSearchChange = (event) => {
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
