import React, { Component } from "react";
import styled from "styled-components";
import Answer from "./Answer";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <Form>
        <label>
          Wybierz produkt:
          <select>
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
          <input type="number" />
        </label>
        <Answer></Answer>
      </Form>
    );
  }
}

const Form = styled.div`
  transform: translatex(calc(50% - 110px));
`;

export default Calculator;
