import React, { FC } from "react";

import { Box, Typography } from "@mui/material";

import { customStyles, group } from "./styles";

const HeaderStudentCard: FC = () => (
  <Box sx={group}>
    <Typography sx={customStyles}>ФИО</Typography>

    <Typography sx={customStyles}>Специальность</Typography>

    <Typography sx={customStyles}>Группа</Typography>

    <Typography sx={customStyles}>Возраст</Typography>

    <Typography sx={customStyles}>Рейтинг</Typography>
    <Typography sx={{ flex: 1 }} />
  </Box>
);

export default HeaderStudentCard;
