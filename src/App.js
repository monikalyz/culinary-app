import styled, { createGlobalStyle } from "styled-components";
import portrait from "./images/portrait.svg";
import landscape from "./images/landscape.svg";
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

  @media (orientation: landscape) {
    flex-direction: row-reverse;
  }
`;

const Image = styled.div`
  background-image: url(${portrait});
  background-size: contain;
  background-position: top;
  background-repeat: repeat-x;
  width: 100%;
  height: 30vh;
  border-bottom: 2px solid #732a36;

  @media (min-width: 300px) and (orientation: portrait) {
    height: 30vh;
  }

  @media (min-width: 461px) {
    background-repeat: repeat;
  }

  @media (min-width: 800px) and (max-width: 900px) {
    border-bottom: 1px solid #732a36;
  }

  @media (orientation: landscape) and (min-height: 300px) {
    background-image: url(${landscape});
    background-repeat: repeat-y;
  }

  @media (orientation: landscape) and (max-height: 500px) {
    background-image: url(${landscape});
    height: 100%;
    background-position: right;
    background-repeat: repeat-y;
    flex-basis: 30%;
  }

  @media (orientation: landscape) and (min-height: 501px) {
    background-image: url(${landscape});
    height: 100%;
    background-position: right;
    flex-basis: 40%;
    background-repeat: repeat-y;
  }

  @media (orientation: landscape) and (min-height: 700px) {
    background-image: url(${landscape});
    background-repeat: repeat-y;
    flex-basis: 50%;
  }

  @media (orientation: landscape) and (min-height: 800px) {
    background-image: url(${landscape});
    background-repeat: repeat-y;
    flex-basis: 50%;
  }

  @media (orientation: landscape) and (min-width: 1140px) {
    background-image: url(${landscape});
    background-repeat: repeat-y;
  }
`;

const Content = styled.div`
  background-color: #732a36;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (orientation: landscape) and (max-height: 500px) {
    flex-direction: row;
    order: 1;
  }
`;

const Header = styled.header`
  text-align: center;
  padding-bottom: 30px;

  @media (orientation: portrait) {
    width: 100%;
  }
  @media (orientation: portrait) and (min-height: 700px) {
    padding-bottom: 70px;
  }

  @media (orientation: landscape) and (max-height: 500px) {
    transform: rotate(-90deg);
  }

  @media (orientation: landscape) and (min-height: 501px) {
    width: 100%;
    margin-top: 5%;
    width: 100%;
  }

  @media (orientation: landscape) and (min-height: 700px) {
    margin-top: 10%;
  }

  & > h1 {
    cursor: pointer;
    font-family: "Caveat", cursive;
    font-size: 38px;

    @media (orientation: portrait) and (min-width: 300px) {
      font-size: 45px;
    }

    @media (orientation: portrait) and (min-width: 700px) {
      font-size: 70px;
    }

    @media (orientation: portrait) and (min-width: 900px) {
      font-size: 100px;
    }

    @media (orientation: landscape) and (max-height: 500px) {
      font-size: 28px;
    }

    @media (orientation: landscape) and (max-height: 500px) {
      font-size: 28px;
    }

    @media (orientation: landscape) and (min-height: 501px) {
      font-size: 55px;
    }

    @media (orientation: landscape) and (min-height: 700px) {
      font-size: 70px;
    }
  }

  & > span {
    font-size: 12px;

    @media (orientation: portrait) and (min-width: 300px) {
      font-size: 14px;
    }

    @media (orientation: portrait) and (min-width: 700px) {
      font-size: 24px;
    }

    @media (orientation: portrait) and (min-width: 900px) {
      font-size: 30px;
    }

    @media (orientation: landscape) and (max-height: 500px) {
      font-size: 12px;
    }
    @media (orientation: landscape) and (min-height: 501px) {
      font-size: 14px;
    }

    @media (orientation: landscape) and (min-height: 700px) {
      font-size: 20px;
    }
  }
`;

export default App;
