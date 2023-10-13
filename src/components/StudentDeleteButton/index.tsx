import React, { FC } from "react";
import { Avatar } from "@mui/material";

import { StudentDeleteButtonProps } from "./types";

import trashImg from "images/trashImg.png";

import { DeleteBtn } from "./styles";

const StudentDeleteButton: FC<StudentDeleteButtonProps> = (props) => {
  const { sortedData, id, setData } = props;

  const handleDeleteStudent = (deleteId: number) => () => {
    const newStudents = sortedData.filter(({ id }) => id !== deleteId);

    setData(newStudents);
  };

  return (
    <DeleteBtn onClick={handleDeleteStudent(id)}>
      <Avatar src={trashImg} alt="trashImg" />
    </DeleteBtn>
  );
};

export default StudentDeleteButton;
