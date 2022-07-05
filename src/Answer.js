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
`;

export default Answer;
