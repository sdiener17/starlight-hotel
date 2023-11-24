import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./data/GameContext.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer.js";
import Homepage from "./components/Homepage/Homepage.js";

export default function App() {
  return (
    <PageWrapper>
      <DataProvider>
        <Header />
        <div>
          {/* <NavBar /> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Routes>
            <Route exact path="/" element={<Homepage />} />
          </Routes>
        </div>
        <div className="separaterBottomFooter" />
        <Footer />
      </DataProvider>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  .separaterBottomFooter {
    margin-bottom: 60px;
  }
  //display:flex;
  height: 100%;
  .routeLeft {
    display: flex;
    justify-content: left !important;
  }
  .routeCenter {
    display: flex;
    justify-content: center !important;
  }
  .contentWrapper {
    /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center; */
  }
`;
