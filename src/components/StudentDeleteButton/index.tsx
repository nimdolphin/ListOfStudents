import React, { FC } from "react";
import trash from "../../images/trash.png";

import "./styles.scss";

type Student = {
  id: number;
  name: string;
  specialty: string;
  avatar: string;
  group: string;
  birthday: string;
  rating: number;
  color: string;
};

type StudentDeleteButtonProps = {
  sortedData: Student[];
  setData: React.Dispatch<React.SetStateAction<Student[]>>;
  id: number;
};

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
