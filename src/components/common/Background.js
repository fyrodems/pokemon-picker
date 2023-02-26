import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  filter: brightness(20%);
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url("./images/background.jpg");
  background-size: cover;
`;

export default Background;
