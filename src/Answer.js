import styled from "styled-components";

const Answer = () => {
  return (
    <Size>
      <span>🥛</span>
      <span>🥄</span>
      <span>🥄</span>
    </Size>
  );
};

const Size = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  & > span {
    margin: 20px 20px 20px 10px;
    font-size: 20px;
  }
`;

export default Answer;
