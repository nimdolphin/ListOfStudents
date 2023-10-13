import React, { FC } from "react";

import { Box, Typography } from "@mui/material";

import { customStyles, group } from "./styles";

const HeaderStudentCard: FC = () => {
  const items = ["ФИО", "Специальность", "Группа", "Возраст", "Рейтинг"];

  return (
    <Box sx={group}>
      {items.map((item, idx) => (
        <Typography key={idx} sx={customStyles}>
          {item}
        </Typography>
      ))}
      <Typography sx={{ flex: 1 }} />
    </Box>
  );
};

export default HeaderStudentCard;
