import { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../common/Container";

const GetSets = () => {
  const [sets, setSets] = useState([]);
  const [numberOfSets, setNumberOfSets] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.tcgdex.net/v2/en/sets`);
      const responseData = await response.json();
      setSets(responseData);
      setNumberOfSets(responseData.length);
    })();
  }, []);

  console.log(sets);
  console.log(numberOfSets);

  return (
    <Container>
      {sets.map((set) => {
        // if (set.logo) {
        //   return (
        //     <SingleSet key={set.id}>
        //       <img alt={set.name} src={set.logo} />
        //       <span>{set.name}</span>
        //     </SingleSet>
        //   );
        // }
        return null;
      })}
    </Container>
  );
};

export default GetSets;

const SingleSet = styled.div`
  display: flex;
  flex-direction: column;
  align-intems: center;
  justify-content: flex-end;
  padding: 20px;
  gap: 30px;
  cursor: pointer;
  // box-shadow: 0 0 20px -5px rgb(66, 68, 90);

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
    // font-size: 18px;
    white-space: wrap;
  }
`;
