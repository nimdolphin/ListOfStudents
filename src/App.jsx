import React from "react";
import Header from "./components/Header";
import StudentDataFetcher from "./components/StudentDataFetcher";
import Title from "./components/Title";

import "./App.scss";

const App = () => {
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
