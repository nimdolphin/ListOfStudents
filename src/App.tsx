import React, { FC } from "react";

import Header from "components/Header";
import StudentDataFetcher from "components/StudentDataFetcher";
import Title from "components/Title";

import { Box } from "@mui/material";

import { app } from "app-styles";

const App: FC = () => {
  return (
    <>
      <Header />

      <Box sx={app}>
        <Title />
        <StudentDataFetcher />
      </Box>
    </>
  );
};

export default App;
