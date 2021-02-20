import React, { Component } from "react";
import styled from "styled-components";
import Faq from "../Faq";

const Button = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 10px 40px;
  border: 1px solid black;
  font-family: "Roboto Condensed";
  color: #333;
  &:hover {
    background: #333;
    color: white;
  }
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  flex-direction: row;
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

export default class HeaderButtons extends Component {
  state = {
    faq: false,
  };

  render() {
    return (
      <>
        {this.state.faq ? <Faq /> : null}
        <ButtonContainer>
          <div style={{ width: 10, height: 10 }} />
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/lauraboemo"
          >
            <Button>@lauraboemo</Button>
          </a>
          <div style={{ width: 10, height: 10 }} />
          <Button
            onClick={() => {
              this.setState((prevState) => ({
                faq: !prevState.faq,
              }));
            }}
          >
            FAQ
          </Button>
          <div style={{ width: 10, height: 10 }} />
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
            href="https://fernando.run"
          >
            <Button>Companheiro de Guerra</Button>
          </a>
        </ButtonContainer>
      </>
    );
  }
}
