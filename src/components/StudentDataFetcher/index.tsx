import React, { useEffect, useState, FC } from "react";
import Search from "components/Search";
import BASE_URL from "api";
import { Student } from "components/StudentDeleteButton/types";

import { Positions } from "components/StudentItem/types";

import "./styles.scss";

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
    <div className="container-all">
      {error ? (
        <p className="error-message">{error}</p>
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
    </div>
  );
};

export default StudentDataFetcher;
