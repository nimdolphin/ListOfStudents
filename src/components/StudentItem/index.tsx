import React, { FC } from "react";
import StudentDeleteButton from "../StudentDeleteButton";
import { StudentItemProps } from "./types";

import ratingLogo from "images/ratingLogo.png";

import "./styles.scss";

const StudentItem: FC<StudentItemProps> = (props) => {
  const { filteredStudents, setData, sortOption } = props;

  const studentAge = (birth: Date) => {
    const today = new Date();
    const birthdate = new Date(birth);
    let age = today.getFullYear() - birthdate.getFullYear();
    if (today < birthdate) {
      age = age - 1;
    }

    return age;
  };

  const enum Positions {
    NameA = "name-a-ya",
    NameYa = "name-ya-a",
    Oldest = "oldest",
    Youngest = "youngest",
    HighRating = "high-rating",
    LowerRating = "lower-rating",
  }

  const sortedData = filteredStudents.sort((a: any, b: any) => {
    if (sortOption === Positions.NameA) {
      return a.name.localeCompare(b.name);
    } else if (sortOption === Positions.NameYa) {
      return b.name.localeCompare(a.name);
    } else if (sortOption === Positions.Oldest) {
      return new Date(a.birthday).getTime() - new Date(b.birthday).getTime();
    } else if (sortOption === Positions.Youngest) {
      return new Date(b.birthday).getTime() - new Date(a.birthday).getTime();
    } else if (sortOption === Positions.HighRating) {
      return b.rating - a.rating;
    } else if (sortOption === Positions.LowerRating) {
      return a.rating - b.rating;
    } else {
      return 0;
    }
  });

  return (
    <>
      {sortedData?.map(
        ({ name, specialty, avatar, group, birthday, rating, color, id }) => {
          return (
            <li className="list" key={id}>
              <div className="container">
                <div className="wrapper-avatar-name">
                  <div className="avatar-name">
                    <div className="wrapp-avatar">
                      <img className="avatar" src={avatar} alt="avatar" />
                    </div>
                    <div className="surname">
                      <h5>{name}</h5>
                    </div>
                  </div>

                  <div className="line2" />
                  <div className="info">
                    <div className="group1 specialty">
                      <h5 className="grop11 s-g-b">{specialty}</h5>
                    </div>

                    <div className="group1 group">
                      <h5 className="grop11 s-g-b">{group}</h5>
                    </div>

                    <div className="group1 birthday">
                      <h5 className="grop11 s-g-b">{studentAge(birthday)}</h5>
                    </div>

                    <div className="group1 rating">
                      <h5 className="grop11 rat">{rating}</h5>
                    </div>

                    <div className="group1 color">
                      <div className="grop11">
                        <h5
                          className="color-box"
                          style={{ backgroundColor: color, borderRadius: 50 }}
                        >
                          {" "}
                        </h5>
                        <div className="star">
                          <img
                            className="star-rating"
                            src={ratingLogo}
                            alt="rating"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="line" />
                </div>
                <div className="trash-btn">
                  <StudentDeleteButton
                    sortedData={sortedData}
                    id={id}
                    setData={setData}
                  />
                </div>
              </div>
            </li>
          );
        }
      )}
    </>
  );
};

export default StudentItem;
