import React, { Component } from "react";
import styled from "styled-components";
import HeaderButtons from "./components/HeaderButtons";
import "./App.css";

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

const Container = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding-left: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-family: "Roboto Condensed";
  font-size: 3em;
`;

export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Header>
            <Title>LAURINHA JÁ CORREU HOJE?</Title>
            <div style={{ flex: 1 }} />
            <div style={{ height: 20 }} />
            <HeaderButtons />
            <div style={{ height: 20 }} />
          </Header>
        </Container>
      </>
    );
  }
}
