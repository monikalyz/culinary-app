import styled, { createGlobalStyle } from "styled-components";
import portrait from "./images/portrait.svg";
import Calculator from "./Calculator";

function App() {
  return (
    <AppWrapper>
      <GlobalResets />
      <Image />
      <Content>
        <Header>
          <h1>Kulinarny kalkulator</h1>
          <span>Szklanka: 250 ml, łyżka: 15 ml, łyżeczka: 5 ml</span>
        </Header>
        <Calculator />
      </Content>
    </AppWrapper>
  );
}

const GlobalResets = createGlobalStyle`
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const AppWrapper = styled.div`
  color: #fff;
  height: 100vh;
  background-color: #732a36;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  background-image: url(${portrait});
  background-size: contain;
  background-position: top;
  background-repeat: repeat-x;
  width: 100%;
  height: 30vh;
  border-bottom: 2px solid #732a36;
`;

const Content = styled.div`
  background-color: #732a36;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  text-align: center;
  padding-bottom: 30px;
  width: 100%;

  & > h1 {
    cursor: pointer;
    font-family: "Caveat", cursive;
    font-size: 38px;
  }

  & > span {
    font-size: 12px;
  }
`;

export default App;
