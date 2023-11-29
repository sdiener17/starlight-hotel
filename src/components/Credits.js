import React from "react";
import styled from "styled-components";

export default function Credits() {
  return (
    <PageWrapper>
      <h2>Credits</h2>
      <div className="credit">
        <h3>Sprites</h3>
        <p>
          All sprites were created using the Universal LPC Spritesheet
          Generator, available online{" "}
          <a
            href="https://sanderfrenken.github.io/Universal-LPC-Spritesheet-Character-Generator/#?body=Body_color_light&head=Human_male_light"
            target="_blank"
          >
            here
          </a>
          . The animations were put together by me, utilizing various individual
          poses from the spritesheets.
        </p>
        <p>
          Sprites by: Johannes Sjölund (wulax), Michael Whitlock (bigbeargames),
          Matthew Krohn (makrohn), Nila122, David Conway Jr. (JaidynReiman),
          Carlo Enrico Victoria (Nemisys), Thane Brimhall (pennomi),
          bluecarrot16, Luke Mehl, Benjamin K. Smith (BenCreating), ElizaWy,
          MuffinElZangano, Durrani, kheftel, Stephen Challener (Redshrike),
          TheraHedwig, Evert, Pierre Vigier (pvigier), Eliza Wyatt (ElizaWy),
          Johannes Sj?lund (wulax), Sander Frenken (castelonia), dalonedrau,
          Lanea Zimmerman (Sharm), laetissima, kirts, Mark Weyer, Joe White,
          Mandi Paugh, William.Thompsonj, Manuel Riecke (MrBeast), Barbara
          Riviera, thecilekli, Yamilian, Fabzy, Skorpio, Radomir Dopieralski,
          Emilio J. Sanchez-Sierra, kcilds/Rocetti/Eredah, Cobra Hubbard
          (BlueVortexGames), DCSS authors, Marcel van de Steeg (MadMarcel),
          DarkwallLKE, Charles Sanchez (CharlesGabriel), Shaun Williams, Tuomo
          Untinen (reemax), Stafford McIntyre, PlatForge project, Tracy, Daniel
          Eddeland (daneeklu), William.Thomsponj, Joshua Taylor, Zi Ye,
          AntumDeluge, drjamgo@hotmail.com, Lori Angela Nagel (jastiv), gr3yh47,
          pswerlang, XOR, tskaufma, Inboxninja, Dr. Jamgo, LordNeo Sprites
          contributed as part of the Liberated Pixel Cup project from
          OpenGameArt.org: http://opengameart.org/content/lpc-collection
          License: Creative Commons Attribution-ShareAlike 3.0 (CC-BY-SA 3.0)
          http://creativecommons.org/licenses/by-sa/3.0/ Detailed credits:{" "}
          <a href="/assets/Credits.csv" download>
            [Download Credits.csv]
          </a>
        </p>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin-bottom: var(--marginBottom);
  padding: 10px;
  .credit {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
  }
`;
