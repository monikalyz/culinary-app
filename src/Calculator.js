import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Answer from "./Answer";

class Calculator extends Component {
  state = {
    product: "flour",
    mass: "",
  };

  static defaultProps = {
    sizes: [
      {
        id: 0,
        name: "glass",
        volume: 250,
        icon: "🥛",
      },
      {
        id: 1,
        name: "spoon",
        volume: 15,
        icon: "🥄",
      },
      {
        id: 2,
        name: "teaspoon",
        volume: 5,
        icon: "🥄",
      },
    ],

    densities: {
      flour: 0.69,
      sugar: 0.88,
      honey: 1.44,
      oil: 0.92,
      milk: 1,
    },
  };

  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
      mass: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      mass: e.target.value,
    });
  };

  selectDensity = (select) => {
    const density = this.props.densities[select];
    return density;
  };

  render() {
    const { product, mass } = this.state;
    const calculators = this.props.sizes.map((size) => (
      <Answer
        key={size.id}
        volume={size.volume}
        icon={size.icon}
        mass={mass}
        density={this.selectDensity(product)}
      />
    ));
    return (
      <Form>
        <label>
          Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="flour">mąka</option>
            <option value="sugar">cukier</option>
            <option value="honey">miód</option>
            <option value="oil">olej</option>
            <option value="milk">mleko</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Podaj ilość w gramach:
          <input type="number" value={mass} onChange={this.handleChange} />
        </label>
        <Answers>{calculators}</Answers>
      </Form>
    );
  }
}

const changeColor = keyframes`
from {
  background-color:  #db6e80;
}
to {
  background-color:  #ffd9df;
}
`;

const Form = styled.div`
  transform: translatex(calc(50% - 110px));

  @media (orientation: portrait) and (min-width: 300px) {
    font-size: 20px;
    transform: translatex(calc(50% - 130px));
  }

  @media (orientation: portrait) and (min-width: 700px) {
    font-size: 30px;
    transform: translatex(calc(50% - 200px));
  }

  @media (orientation: portrait) and (min-width: 900px) {
    margin-top: 70px;
    font-size: 40px;
    transform: translatex(calc(50% - 300px));
  }

  @media (orientation: landscape) and (min-height: 360px) {
    font-size: 16px;
    transform: translateX(0);
    margin-top: 0px;
  }

  @media (orientation: landscape) and (min-height: 361px) {
    font-size: 20px;
  }

  @media (orientation: landscape) and (min-height: 501px) {
    font-size: 25px;
  }

  @media (orientation: landscape) and (min-height: 700px) {
    font-size: 30px;
  }

  & > label > select,
  input {
    margin-left: 10px;
    width: 70px;
    height: 20px;
    border: none;
    outline: none;
    border-radius: 3px;
    background-color: #db6e80;

    @media (orientation: portrait) and (min-width: 300px) {
      font-size: 18px;
      height: 25px;
    }

    @media (orientation: portrait) and (min-width: 700px) {
      font-size: 25px;
      height: 35px;
      width: 100px;
    }

    @media (orientation: portrait) and (min-width: 900px) {
      font-size: 35px;
      height: 45px;
      width: 150px;
    }

    @media (orientation: landscape) and (max-height: 360px) {
      font-size: 14px;
      height: 20px;
    }

    @media (orientation: landscape) and (min-height: 361px) {
      font-size: 18px;
      height: 24px;
      width: 100px;
    }

    @media (orientation: landscape) and (min-height: 501px) {
      font-size: 22px;
      height: 30px;
    }

    @media (orientation: landscape) and (min-height: 700px) {
      font-size: 28px;
      height: 35px;
    }
  }

  & > label > input {
    padding-left: 5px;
  }

  & > label > select:focus,
  input:focus {
    animation: ${changeColor} 0.1s linear forwards;
  }
`;

const Answers = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export default Calculator;
