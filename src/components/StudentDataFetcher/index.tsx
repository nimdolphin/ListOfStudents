import React, { useEffect, useState, FC } from "react";
import Search from "../Search";

import "./styles.scss";
import { Student } from "components/StudentDeleteButton/types";

const StudentDataFetcher: FC = () => {
  const [data, setData] = useState<Student[]>([]);

  const [error, setError] = useState(null);

  const [searchName, setSearchText] = useState("");

  const [sortOption, setSortOption] = useState("name-a-ya");

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch(`https://front-assignment-api.2tapp.cc/api/persons`)
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
