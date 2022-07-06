import styled from "styled-components";

const Answer = (props) => {
  const score = (props.mass / props.volume / props.density).toFixed(2);
  return (
    <Size>
      {props.icon} {props.mass <= 0 ? "" : score}
    </Size>
  );
};

const Size = styled.div`
  margin: 20px 20px 20px 10px;
  font-size: 20px;

  @media (orientation: portrait) and (min-width: 300px) {
    font-size: 24px;
  }

  @media (orientation: portrait) and (min-width: 700px) {
    font-size: 35px;
  }

  @media (orientation: portrait) and (min-width: 900px) {
    font-size: 40px;
  }

  @media (orientation: landscape) and (max-height: 500px) {
    margin: 10px;
  }

  @media (orientation: landscape) and (min-height: 501px) {
    font-size: 30px;
  }

  @media (orientation: landscape) and (min-height: 700px) {
    font-size: 35px;
  }

  &:last-child {
    font-size: 15px;

    @media (orientation: portrait) and (min-width: 300px) {
      font-size: 20px;
    }

    @media (orientation: portrait) and (min-width: 700px) {
      font-size: 26px;
    }

    @media (orientation: portrait) and (min-width: 900px) {
      font-size: 36px;
    }

    @media (orientation: landscape) and (min-height: 501px) {
      font-size: 25px;
    }

    @media (orientation: landscape) and (min-height: 700px) {
      font-size: 30px;
    }
  }
`;

export default Answer;
