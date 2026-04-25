import React, { useState, useEffect } from 'react';

import "./App.css";
import Card from "./components/Card/Card";
import styled from "styled-components";
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.isWrong ? "#f4acb7" : "#f0f0f0")};
  transition: background-color 1.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerFlex = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
`;

function App() {
  const initialCards = [
    {
      id: 0,
      value: "1",
      isFlipped: false,
      isMatched: false,
      gif: "1.gif",
    },
    {
      id: 1,
      value: "1",
      isFlipped: false,
      isMatched: false,
      gif: "1.gif",
    },
    {
      id: 2,
      value: "2",
      isFlipped: false,
      isMatched: false,
      gif: "2.gif",
    },
    {
      id: 3,
      value: "2",
      isFlipped: false,
      isMatched: false,
      gif: "2.gif",
    },
    {
      id: 4,
      value: "3",
      isFlipped: false,
      isMatched: false,
      gif: "3.gif",
    },
    {
      id: 5,
      value: "3",
      isFlipped: false,
      isMatched: false,
      gif: "3.gif",
    },
    {
      id: 6,
      value: "4",
      isFlipped: false,
      isMatched: false,
      gif: "4.gif",
    },
    {
      id: 7,
      value: "4",
      isFlipped: false,
      isMatched: false,
      gif: "4.gif",
    },
    {
      id: 8,
      value: "5",
      isFlipped: false,
      isMatched: false,
      gif: "5.gif",
    },
    {
      id: 9,
      value: "5",
      isFlipped: false,
      isMatched: false,
      gif: "5.gif",
    },
    {
      id: 10,
      value: "6",
      isFlipped: false,
      isMatched: false,
      gif: "6.gif",
    },
    {
      id: 11,
      value: "6",
      isFlipped: false,
      isMatched: false,
      gif: "6.gif",
    },
  ];
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Gera um índice aleatório entre 0 e i
      [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
    }
    return array;
  };
  const { width, height } = useWindowSize()

  const [cards, setCards] = useState(shuffleArray(initialCards));
  const [flippedCards, setFlippedCards] = useState([]);
  const [isMatched, setIsMatched] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  
  const handleClick = (card) => {
    console.log(card)
    if (flippedCards.length < 2 && !card.isFlipped && !card.isMatched) {
      setCards((prevCards) =>
        prevCards.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c))
      );
      setFlippedCards([...flippedCards, card]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      
      if (first.value === second.value) {
        setIsMatched(true);
        setTimeout(() => setIsMatched(false), 5000); 
        setCards(prevCards =>
          prevCards.map(card =>
            card.value === first.value ? { ...card, isMatched: true } : card
          )
        );
        
      } else {
        setIsWrong(true);
        setTimeout(() => {
          setIsWrong(false);
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === first.id || card.id === second.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 5000);
      }
      
      setFlippedCards([]);
    }
  }, [flippedCards]);

  return (
    <Container isWrong={isWrong}>
      {isMatched && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    <ContainerFlex>
      
      {cards.map((card, index) => (
        <Card key={index} index={index} card={card} handleClick={handleClick}/>
      ))}
      </ContainerFlex>
    </Container>
    
  );
}

export default App;
