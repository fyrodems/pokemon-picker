import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Nav>
        <img src="./images/logo.png" alt="logo" />
        <GoHome href="/">HOME</GoHome>
      </Nav>
      <Info>
        <span></span>
        <span></span>
      </Info>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #000;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  text-decoration: underline;
  align-items: center;

  img {
    width: 30px;
  }
`;

const GoHome = styled.a`
  color: white;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 70%;
  gap: 5px;
`;
