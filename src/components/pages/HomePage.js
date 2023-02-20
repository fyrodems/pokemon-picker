// import { useEffect } from "react";
import styled from "styled-components";
// import Cards from "../Cards";
import Background from "../common/Background";

const HomePage = () => {
  return (
    <Container>
      <Background />
      <h1 className="title">Pokemon picker</h1>
      {/* <Cards /> */}
    </Container>
  );
};

export default HomePage;

const Container = styled.main`
  height: calc(100vh - 70px);
  padding: 40px;
`;
