import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
// import { DataProvider } from "./data/GameContext.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer.js";
import Homepage from "./components/Homepage/Homepage.js";
import Gamepage from "./components/Gamepage/Gamepage.js";
import Credits from "./components/Credits.js";
import About from "./components/About.js";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <PageWrapper>
      {/* <DataProvider> */}
      <Header gameStarted={gameStarted} />
      <div className="bodyContent">
        {/* <NavBar /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage setGameStarted={setGameStarted} />}
          />
          <Route exact path="/game" element={<Gamepage />} />
          <Route exact path="/credits" element={<Credits />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
      <div className="separaterBottomFooter" />
      <Footer />
      {/* </DataProvider> */}
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  .separaterBottomFooter {
    margin-bottom: 60px;
  }
  //display:flex;
  height: 100%;
`;
