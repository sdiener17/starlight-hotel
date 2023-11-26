import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
// import { DataProvider } from "./data/GameContext.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer.js";
import Homepage from "./components/Homepage/Homepage.js";
import Gamepage from "./components/Gamepage/Gamepage.js";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <PageWrapper>
      {/* <DataProvider> */}
      <Header gameStarted={gameStarted} />
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage setGameStarted={setGameStarted} />}
          />
          <Route path="game" element={<Gamepage />} />
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
