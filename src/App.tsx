import React, { FC } from "react";
import Header from "./components/Header";
import StudentDataFetcher from "./components/StudentDataFetcher";
import Title from "./components/Title";

import "./App.scss";

const App: FC = () => {
  return (
    <>
      <Header />

      <div className="App">
        <header className="App-header">
          <Title />
          <StudentDataFetcher />
        </header>
      </div>
    </>
  );
};

export default App;
