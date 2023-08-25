import React from "react";
import trash from "../../images/trash.png";

import "./styles.scss";

const StudentDeleteButton = ({ sortedData, id, setData }) => {
  const handleDeleteStudent = (deleteId) => () => {
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
