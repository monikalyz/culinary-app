import React, { Component } from "react";
import styled from "styled-components";
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

const Form = styled.div`
  transform: translatex(calc(50% - 110px));
`;

const Answers = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export default Calculator;
