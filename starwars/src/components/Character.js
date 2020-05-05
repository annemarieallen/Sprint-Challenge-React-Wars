// Write your Character component here
import React from "react";
import styled from "styled-components";

const DivBackground = styled.div`
  border: 1px sold black;
  margin: 5px;
  padding: 5px;
  background-color: white;
`;

const Person = (props) => {
  return (
    <DivBackground>
      <h2>{props.characterData.name}</h2>
      <p> height: {props.characterData.height}</p>
      <p> mass: {props.characterData.mass}</p>
      <p> eye color: {props.characterData.eye_color}</p>
    </DivBackground>
  );
};

export default Person;
