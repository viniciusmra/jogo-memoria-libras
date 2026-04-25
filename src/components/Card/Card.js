import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 283px;
  height: 405px;
  margin: 0px;
  display: flex;
  justify-content: left;
  align-items: start;
    box-sizing: border-box;
    
`;

const Border = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  width: 283px;
  height: 405px;
  border: 8px solid #fff;
  z-index: 1;
  border-radius: 8px;
  display: ${(props) => (props.isFlipped ? "none" : "block")};
`;



const Gif = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 252px;
  height: 360px;
  display: ${(props) => (props.show ? "block" : "none")};
  opacity: ${(props) => (props.isMatched ? 0.3 : props.isFlipped ? 1 : 0)};
  transition: opacity 1.0s ease-in-out;
  border-radius: 8px;
  margin: 0px;
  padding: 0px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 0, 0, 1); // Ajuste a opacidade conforme necessário
    border-radius: 8px;
    mix-blend-mode: multiply; // Altere para 'overlay' ou outro modo de mistura se preferir
  }
`;

const HoverDiv = ({ index, card, handleClick }) => {
  const [showGif, setShowGif] = useState(false);

  return (
    <Container isFlipped={card.isFlipped} isMatched={card.isMatched} onClick={() => handleClick(card)}>
      <Gif show={true} isFlipped={!card.isFlipped} isMatched={false} src={index + 1 + ".png"} alt="GIF" />
      <Gif show={true} isFlipped={card.isFlipped} isMatched={card.isMatched} src={card.gif} alt="GIF" />
    </Container>
  );
};

export default HoverDiv;
