import styled from "styled-components";
import Background from "../common/Background";
import GetSets from "../fetchComponents/GetSets";

const SetsPage = () => {
  return (
    <Container>
      <Background />
      <h1 className="title">Pokemon picker</h1>
      <GetSets />
    </Container>
  );
};

export default SetsPage;

const Container = styled.main`
  height: calc(100vh - 70px);
  padding: 40px;
`;
