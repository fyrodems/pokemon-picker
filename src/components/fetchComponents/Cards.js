import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const imageSuffix = "/high.webp";

  useEffect(() => {
    fetch("https://api.tcgdex.net/v2/en/cards")
      .then((res) => res.json())
      .then((result) => {
        setCards(result.slice(6, 11));
      });
  }, []);

  return (
    <Container>
      {cards.map((card) => {
        return (
          <Card key={card.id} className="card">
            <Link to={`/${card?.id}`}>
              <img alt={card?.name} src={card?.image + imageSuffix} />
            </Link>
          </Card>
        );
      })}
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  box-shadow: 0 0 20px -5px rgb(66, 68, 90);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

const Card = styled.div`
  cursor: pointer;

  img {
    max-width: 300px;
    width: 100%;
    border-radius: 4px;
    transition: 500ms;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
