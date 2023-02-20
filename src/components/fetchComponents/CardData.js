import styled from "styled-components";
import Container from "../common/Container";

const CardData = ({ data }) => {
  const img = data?.image;
  const imageSuffix = "/high.webp";
  console.log(data?.attacks?.map((at) => at));
  return (
    <Container>
      <h2>Here's information about your {data.category}</h2>
      <Wrapper>
        <img width="300" alt="card" src={img + imageSuffix} />
        <Detail>
          <ul>
            <li>
              <span className="title">rarity:</span>
              {data.rarity}
            </li>
            <li>
              <span className="title">hp:</span>
              {data.hp}
            </li>
            <li>
              <span className="title">stage:</span>
              {data.stage}
            </li>
            <li>
              <span className="title">attacks:</span>
              {data?.attacks?.map((attack, i) => (
                <span key={i} className="atack">
                  {attack.name}
                </span>
              ))}
            </li>
          </ul>
        </Detail>
      </Wrapper>
    </Container>
  );
};

export default CardData;

const Wrapper = styled.div`
  display: flex;

  ~ h2 {
    display: inline-block;
    margin-bottom: 30px;
  }

  img {
    border-radius: 10px;
    margin: 40px;
  }
`;

const Detail = styled.div`
  letter-spacing: 2px;
  margin: 40px;
  .title {
    font-weight: 600;
    margin: 0 5px 7px 0;
    display: inline-block;
  }
  ul {
    list-style: none;
    margin: 0 10px;
    text-align: left;
  }
  li {
    margin: 5px 0;
  }
  .atack {
    margin-right: 5px;

    &:not(:last-child)::after {
      content: ",";
    }
  }
`;
