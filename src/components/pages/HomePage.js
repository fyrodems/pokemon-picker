// import { useEffect } from "react";
import styled from "styled-components";
// import Cards from "../fetchComponents/Cards";
import Background from "../common/Background";
import GetSeries from "../fetchComponents/GetSeries";

const HomePage = () => {
  return (
    <Container>
      <Background />
      <h1 className="title">Pokemon picker</h1>
      {/* <Cards /> */}
      <GetSeries />
    </Container>
  );
};

export default HomePage;

const Container = styled.main`
  height: calc(100vh - 70px);
  padding: 40px;
`;
