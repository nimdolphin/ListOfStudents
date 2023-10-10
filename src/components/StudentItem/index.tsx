import React, { FC } from "react";
import { Avatar, Box, List, ListItem, Typography } from "@mui/material";

import StudentDeleteButton from "components/StudentDeleteButton";

import { StudentItemProps } from "./types";
import { Positions } from "./types";

import raitingLogo from "images/ratingLogo.png";

import {
  list,
  container,
  avatarName,
  photo,
  surname,
  infoStudent,
  specialtyItem,
  groupItem,
  ageItem,
  ratingItem,
  ColorItem,
  deleteBtn,
  raitingImg,
  line,
  thinLine,
} from "./styles";

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

  return sortedData?.map((props) => {
    const { name, specialty, avatar, group, birthday, rating, color, id } =
      props;

    return (
      <List key={id}>
        <ListItem sx={list}>
          <Box sx={container}>
            <Box>
              <Box sx={avatarName}>
                <Avatar sx={photo} src={avatar} alt="avatar" />
                <Typography sx={surname}>{name}</Typography>
              </Box>

              <Box sx={infoStudent}>
                <Typography sx={specialtyItem}>{specialty}</Typography>
                <Typography sx={groupItem}>{group}</Typography>
                <Typography sx={ageItem}>{studentAge(birthday)}</Typography>
                <Typography sx={ratingItem}>{rating}</Typography>
                <Avatar sx={raitingImg} src={raitingLogo} alt="raitingLogo" />

                <ColorItem color={color} />
              </Box>
            </Box>

            <Box sx={deleteBtn}>
              <StudentDeleteButton
                sortedData={sortedData}
                id={id}
                setData={setData}
              />
            </Box>
          </Box>
        </ListItem>
        <Box sx={thinLine} />

        <Box sx={line} />
      </List>
    );
  });
};

export default StudentItem;
