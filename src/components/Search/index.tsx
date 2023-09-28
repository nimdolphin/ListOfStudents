import React, { useEffect, useState, FC } from "react";
import HeaderStudentCard from "../HeaderStudentCard";
import StudentItem from "../StudentItem";
import DropdownList from "../DropdownList";
import StudentSearch from "../StudentSearch";
import { SearchProps } from "./types";

import "./styles.scss";
import { Student } from "components/StudentDeleteButton/types";

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
