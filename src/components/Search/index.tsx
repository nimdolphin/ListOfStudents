import React, { useEffect, useState, FC } from "react";
import HeaderStudentCard from "components/HeaderStudentCard";
import StudentItem from "components/StudentItem";
import DropdownList from "components/DropdownList";
import StudentSearch from "components/StudentSearch";
import { SearchProps } from "./types";
import { Student } from "components/StudentDeleteButton/types";

import { SearchBox, HeaderStudentBox, StudentListBox } from "./styles";

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
      <SearchBox>
        <StudentSearch searchName={searchName} setSearchText={setSearchText} />
        <DropdownList setSortOption={setSortOption} sortOption={sortOption} />
      </SearchBox>

      <HeaderStudentBox>
        <HeaderStudentCard />
      </HeaderStudentBox>

      <StudentListBox>
        <StudentItem
          filteredStudents={filteredStudents}
          setData={setData}
          sortOption={sortOption}
        />
      </StudentListBox>
    </>
  );
};

export default Search;
