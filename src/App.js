import React, { Component } from "react";
import styled from "styled-components";
import Faq from "./Faq";

const Header = styled.div`
  background-color: white;
  align-items: center;
  justify-content: center;
  color: black;
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Titulo = styled.div`
  font-weight: 700;
  font-family: "Roboto Condensed";
  font-size: 3em;
`;

const Botão = styled.div`
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

const BotãoGeral = styled.div`
  flex-direction: row;
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

class HeaderBotãos extends Component {
  state = {
    faq: false,
  };

  render() {
    return (
      <>
        {this.state.faq ? <Faq /> : null}
        <BotãoGeral>   
        <div style={{ width: 10, height: 10 }} />
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/lauraboemo"
          >
            <Botão>@lauraboemo</Botão>
          </a>   
          <div style={{ width: 10, height: 10 }} />
          <Botão
            onClick={() => {
              this.setState((prevState) => ({
                faq: !prevState.faq,
              }));
            }}
          >
            FAQ
          </Botão>
          <div style={{ width: 10, height: 10 }} />
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
            href="https://fernando.run"
          >
            <Botão>Companheiro de Guerra</Botão>
          </a>   
        </BotãoGeral>
      </>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Titulo>LAURINHA JÁ CORREU HOJE?</Titulo>
          <div style={{ flex: 1 }} />
          <div style={{ height: 20 }} />
          <HeaderBotãos />
          <div style={{ height: 20 }} />
        </Header>
      </Container>
    );
  }
}
export default App;