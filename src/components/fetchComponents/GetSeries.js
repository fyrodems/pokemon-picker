import { useEffect, useState } from "react";
import styled from "styled-components";
// import styled from "styled-components";
// import Background from "../common/Background";
import Container from "../common/Container";

const GetSeries = () => {
  const [series, SetSeries] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.tcgdex.net/v2/en/series`);
      const responseData = await response.json();
      SetSeries(responseData);
    })();
  }, []);

  console.log(series);

  return (
    <Container>
      {series.map((serie) => {
        if (serie.logo) {
          return (
            <SingleSerie key={serie.id}>
              <img alt={serie.name} src={serie.logo} />
              <span>{serie.name}</span>
            </SingleSerie>
          );
        }
      })}
    </Container>
  );
};

export default GetSeries;

const SingleSerie = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
  cursor: pointer;

  transition: 500ms;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 160px;
    max-height: 160px;
  }

  span {
    text-align: center;
  }
`;
