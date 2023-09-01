import React, { FC } from "react";
import "./styles.scss";

const HeaderStudentCard: FC = () => {
  return (
    <div className="students-list-header">
      <div className="student-item11">
        <h5 className="student-item">ФИО</h5>
      </div>

      <div className="student-item11">
        <h5 className="student-item">Специальность</h5>
      </div>

      <div className="student-item11">
        <h5 className="student-item">Группа</h5>
      </div>

      <div className="student-item11">
        <h5 className="student-item">Возраст</h5>
      </div>

      <div className="student-item11">
        <h5 className="student-item">Рейтинг</h5>
      </div>

      <div className="student-item11">
        <div className="student-item"></div>
      </div>
    </div>
  );
};

export default HeaderStudentCard;
