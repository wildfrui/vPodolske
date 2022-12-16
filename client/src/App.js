import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Title from "./components/Title";

import "./css/normalize.css";

const App = () => {
  return (
    <>
      <Header solid></Header>
      <MainSection>
        <Title
          text="Истории, рассказанные городом и пропитанные историей в 241 год"
          page="stories"
        ></Title>
      </MainSection>
      <Title></Title>
    </>
  );
};

export default App;
