import React, { useEffect, useState, FC } from "react";
import HeaderStudentCard from "components/HeaderStudentCard";
import StudentItem from "components/StudentItem";
import DropdownList from "components/DropdownList";
import StudentSearch from "components/StudentSearch";
import { SearchProps } from "./types";
import { Student } from "components/StudentDeleteButton/types";

import "./styles.scss";

const Search: FC<SearchProps> = (props) => {
  const {
    data,
    searchName,
    setSearchText,
    setData,
    sortOption,
    setSortOption,
  } = props;

  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);

  useEffect(() => {
    const filteredStudents = () => {
      const filtered = data.filter((student) =>
        student.name
          .toLocaleLowerCase()
          .includes(searchName.toLocaleLowerCase())
      );
      setFilteredStudents(filtered);
    };
    filteredStudents();
  }, [data, searchName]);

  return (
    <>
      <div className="box">
        <StudentSearch searchName={searchName} setSearchText={setSearchText} />
        <DropdownList setSortOption={setSortOption} sortOption={sortOption} />
      </div>

      <div className="header-student">
        <HeaderStudentCard />
      </div>

      <div className="all-students">
        <StudentItem
          filteredStudents={filteredStudents}
          setData={setData}
          sortOption={sortOption}
        />
      </div>
    </>
  );
};

export default Search;
