import { useEffect } from "react";
// import styled from "styled-components";
// import Background from "../common/Background";
import Container from "../common/Container";

const GetSeries = () => {
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.tcgdex.net/v2/en/series`);
      const responseData = await response.json();
      console.log(responseData);
    })();
  }, []);

  return <Container></Container>;
};

export default GetSeries;
