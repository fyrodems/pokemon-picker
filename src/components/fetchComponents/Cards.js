import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../common/Container";

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
