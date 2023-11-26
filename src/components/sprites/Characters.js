import richard1 from "../../images/richard1.png";
import richardStanding from "../../images/richardStanding1.png";
import MaterialGirl1 from "../../images/materialGirlStanding1.png";
import styled, { keyframes } from "styled-components";
const animation = keyframes`
  100% { background-position: -1408px; }
`;
export const Richard = styled.div`
  /* size: 400%; */
  height: 128px;
  width: 128px;
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  background: url(${richardStanding}) left center;
  animation: ${animation} 3s steps(11) infinite;
`;

export const MaterialGirl = styled.div`
  /* size: 400%; */
  height: 128px;
  width: 128px;
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  background: url(${MaterialGirl1}) left center;
  animation: ${animation} 3s steps(11) infinite;
`;
