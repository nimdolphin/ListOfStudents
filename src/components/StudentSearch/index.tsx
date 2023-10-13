import React, { FC, ChangeEvent } from "react";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import { StudentSearchProps } from "./types";

import { SearchContainer, SearchField } from "./styles";

const StudentSearch: FC<StudentSearchProps> = ({
  searchName,
  setSearchText,
}) => {
  const theme = useTheme();
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchField
        variant="outlined"
        type="text"
        placeholder="Поиск по имени"
        value={searchName}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        theme={theme}
      />
    </SearchContainer>
  );
};

export default StudentSearch;
