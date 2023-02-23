import styled from "styled-components";
import Background from "../common/Background";
// import Cards from "../fetchComponents/Cards";
// import GetSeries from "../fetchComponents/GetSeries";
import GetSets from "../fetchComponents/GetSets";

const HomePage = () => {
  return (
    <Container>
      <Background />
      <h1 className="title">Pokemon picker</h1>
      {/* <h2>Pick a serie!</h2> */}
      {/* <Cards /> */}
      {/* <GetSeries /> */}
      <GetSets />
    </Container>
  );
};

export default HomePage;

const Container = styled.main`
  height: calc(100vh - 70px);
  padding: 40px;
`;
