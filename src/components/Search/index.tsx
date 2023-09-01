import React, { FC } from "react";
import HeaderStudentCard from "../HeaderStudentCard";
import StudentItem from "../StudentItem";
import DropdownList from "../DropdownList";
import StudentSearch from "../StudentSearch";

import "./styles.scss";

interface Student {
  id: number;
  name: string;
  specialty: string;
  avatar: string;
  group: string;
  birthday: string;
  rating: number;
  color: string;
}

interface SearchProps {
  data: Student[];
  searchName: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<Student[]>>;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

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
