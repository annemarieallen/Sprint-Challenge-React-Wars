// Write your Character component here
import React from "react";
import styled from "styled-components";

const DivBackground = styled.div`
  border: 1px solid black;
  margin: 10px;
  background-color: white;
`;

const Character = (props) => {
  return (
    <DivBackground>
      <h2>{props.characterData.name}</h2>
      <img src={props.characterData.image} />
    </DivBackground>
  );
};

export default Character;
