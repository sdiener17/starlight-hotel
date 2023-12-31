/* Written by: Sarah Diener (sdiener17)
 * Created: 11/19/23
 * Description: Header component for the game.
 * Input:
 * - gameStarted: true/false, indicates if the game is running or not, which determines the type of header shown.
 */
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { StatsContext } from "../../data/GameContext";
// import NavBar from "./NavBar";

export default function Header({ gameStarted }) {
  // document.body.style.margin = 0;
  const statsList = useContext(StatsContext);
  useEffect(() => {
    //something
  }, [gameStarted]);
  //const history = useNavigate();

  return (
    <PageWrapper>
      <h1 className="headerMain">The Starlight Hotel</h1>
    </PageWrapper>
  );
}

const PageWrapper = styled.nav`
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
  background: var(--siteColor4);
  border-bottom: 5px solid var(--secondarySiteColor);
  z-index: 999;
  font-family: "Helvetica Neue";
  font-size: 1.5rem;
  color: var(--cardGrey);
  /* width: 100%; */
  margin: 0;
  .headerMain {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    //max-width: 1500px;
    margin: 5 auto;
    width: 100%;
  }
  .headerTitle {
    font-size: 2.5rem;
    color: var(--lightGrey);
    text-transform: uppercase;
    letter-spacing: 0.12rem;
  }
  .headerSub {
    display: flex;
    align-items: left;
    flex-direction: column;
    font-size: 1rem;
    color: var(--lightGrey);
  }
  .logo {
    height: 50%;
    width: 10%;
  }
  .links {
    display: flex;
    flex-direction: column;
    margin-bottom: 3px;
  }
  @media screen and (max-width: 500px) {
    .headerMain {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }
`;
