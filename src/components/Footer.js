/* Written by: Sarah Diener (sdiener17)
 * Created: 11/19/23
 * Description: Footer component for the game.
 */
import React from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import styled from "styled-components";
// import Mr_Blue_Sky from "../music/Mr_Blue_Sky.mp3";

export default function Footer() {
  return (
    <FootWrapper>
      <div className="FooterMain">
        <div className="links">
          <p className="text-1">Copyright 2024</p>
          &nbsp; | &nbsp;
          <Link to="/" className="footerLink">
            Home
          </Link>
          &nbsp; | &nbsp;
          <Link to="/credits" className="footerLink">
            Credits
          </Link>
          &nbsp; | &nbsp;
          <Link to="/about" className="footerLink">
            About
          </Link>
        </div>
        {/* <ReactAudioPlayer
          src={Mr_Blue_Sky}
          autoPlay={true}
          controls={true}
          loop={true}
          className="audio-player"
        /> */}
      </div>
    </FootWrapper>
  );
}

const FootWrapper = styled.footer`
  //margin-top: 60px;
  .FooterMain {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    /* vertical-align: bottom; */
    justify-content: center;
    //max-width: 1600px;
    //margin: 5 auto;
    position: sticky;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 80px;
    //padding: 1rem 1.5rem;
    background: linear-gradient(
      to top right,
      var(--primarySiteColor),
      var(--darkSiteColor)
    );
    border-bottom: 5px solid var(--secondarySiteColor);
    z-index: 999;
    color: var(--lightGrey);
  }
  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .footerLink {
    margin: 10px;
    font-family: "fira-sans";
    font-size: 1rem;
  }
  .text-1 {
    margin-right: 10px;
  }
  .audio-player {
    max-height: 40px;
  }

  @media screen and (max-width: 500px) {
    .FooterMain {
      float: none;
      /* display: block; */
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }
  .footerLink:link {
    color: white;
    background-color: transparent;
    text-decoration: none;
  }

  .footerLink:visited {
    color: white;
    background-color: transparent;
    text-decoration: none;
  }

  .footerLink:hover {
    color: darkgray;
    background-color: transparent;
    text-decoration: underline;
  }

  /* a:active {
    color: yellow;
    background-color: transparent;
    text-decoration: underline;
  } */
`;
