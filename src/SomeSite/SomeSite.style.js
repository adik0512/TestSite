import styled from "styled-components";

export const Background = styled.div`
  position: center;
  left: 10vw;
  width: 80wv;
  top: 10vh;
  height: 80vh;
  background-image: url('${require("./wallhaven.jpg")}');
  background-color: #cccccc;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`;

export const White = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 2em;
  h1 {
    margin-bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  position: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
