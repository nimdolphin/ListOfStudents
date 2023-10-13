import React, { useEffect, useState, FC } from "react";
import { Typography } from "@mui/material";

import Search from "components/Search";
import BASE_URL from "api";
import { Student } from "components/StudentDeleteButton/types";

import { Positions } from "components/StudentItem/types";

import { WrapBox } from "./styles";

const StudentDataFetcher: FC = () => {
  const [data, setData] = useState<Student[]>([]);

  const [error, setError] = useState(null);

  const [searchName, setSearchText] = useState("");

  const [sortOption, setSortOption] = useState<string | Positions>(
    Positions.NameA
  );

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch(`${BASE_URL}`)
          .then((res) => {
            if (!res.ok) {
              throw Error("Oops, something went wrong...");
            }

            return res.json();
          })
          .then((data) => {
            setData(data.students);
            setError(null);
          });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <WrapBox>
      {error ? (
        <Typography>{error}</Typography>
      ) : (
        <Search
          data={data}
          searchName={searchName}
          setSearchText={setSearchText}
          setData={setData}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      )}
    </WrapBox>
  );
};

export default StudentDataFetcher;
