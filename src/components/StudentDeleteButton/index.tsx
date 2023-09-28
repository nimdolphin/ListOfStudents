import React, { FC } from "react";

import { StudentDeleteButtonProps } from "./types";

import trash from "images/trash.png";

import "./styles.scss";

const StudentDeleteButton: FC<StudentDeleteButtonProps> = ({
  sortedData,
  id,
  setData,
}) => {
  const handleDeleteStudent = (deleteId: number) => () => {
    const newStudents = sortedData.filter(({ id }) => id !== deleteId);

    setData(newStudents);
  };

  return (
    <>
      <button className="button" onClick={handleDeleteStudent(id)}>
        <img className="trash" src={trash} alt="trash" />
      </button>
    </>
  );
};

export default StudentDeleteButton;
