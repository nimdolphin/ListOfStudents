import React, { FC } from "react";
import HeaderStudentCard from "../HeaderStudentCard";
import StudentItem from "../StudentItem";
import DropdownList from "../DropdownList";
import StudentSearch from "../StudentSearch";
import { SearchProps } from "./types";

import "./styles.scss";

const Search: FC<SearchProps> = ({
  data,
  searchName,
  setSearchText,
  setData,
  sortOption,
  setSortOption,
}) => {
  const filteredStudents = data.filter((student) =>
    student.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <>
      <div className="box">
        <StudentSearch searchName={searchName} setSearchText={setSearchText} />
        <DropdownList setSortOption={setSortOption} sortOption={sortOption} />
      </div>

      <div className="header-student">
        <HeaderStudentCard />
      </div>

      <ul className="all-students">
        {
          <StudentItem
            filteredStudents={filteredStudents}
            setData={setData}
            sortOption={sortOption}
          />
        }
      </ul>
    </>
  );
};

export default Search;
