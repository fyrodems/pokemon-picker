import Background from "../common/Background";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardData from "../fetchComponents/CardData";

const CardPage = () => {
  const { id } = useParams();

  const [cardData, setCardData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.tcgdex.net/v2/en/cards/${id}`);
      const responseData = await response.json();
      setCardData(responseData);
    })();
  }, [id]);

  return (
    <Container>
      <Background />
      <h1 className="title">You picked {cardData?.name}!</h1>
      <CardData data={cardData} />
    </Container>
  );
};

export default CardPage;

const Container = styled.main`
  padding: 40px;
`;
