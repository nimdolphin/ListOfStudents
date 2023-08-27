import React, { useEffect, useState, FC } from "react";
import Search from "../Search";

import "./styles.scss";

const StudentDataFetcher: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchName, setSearchText] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("name-a-ya");

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch(`https://front-assignment-api.2tapp.cc/api/persons`)
          .then((res) => {
            if (!res.ok) {
              throw Error("Упс, что-то пошло не так...");
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
