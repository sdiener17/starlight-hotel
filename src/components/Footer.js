/* Written by: Sarah Diener (sdiener17)
 * Created: 11/19/23
 * Description: Footer component for the game.
 */
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import styled from "styled-components";
// import Mr_Blue_Sky from "../music/Mr_Blue_Sky.mp3";

export default function Footer() {
  return (
    <FootWrapper>
      <div className="FooterMain">
        <a href="/credits">Credits</a>
        <p className="text-1">Copyright 2024</p>
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
    align-items: center;
    vertical-align: bottom;
    justify-content: space-around;
    flex-direction: row;
    //max-width: 1600px;
    //margin: 5 auto;
    position: -webkit-sticky;
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
    border-bottom: 5px solid var(--mediumGrey);
    z-index: 999;
    color: var(--lightGrey);
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
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }
`;
