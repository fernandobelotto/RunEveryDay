import React from "react";
import styled from "styled-components";

const FaqTitle = styled.h2`
  font-family: "Roboto Condensed";
  border-bottom: 1px solid #333;
`;

const FaqStyled = styled.div`
  text-align: left;
  max-width: 900px;
`;

export default function Faq() {
  return (
    <FaqStyled>
      <FaqTitle>FAQ do Desafio</FaqTitle>
      <h3>Quais são as regras?</h3>
      <p>
        Eu devo <span style={{ borderBottom: "1px solid" }}>correr diariamente</span>! O código sempre inicializará o dia às 2a.m. e a distância mínima é 2.5km (aprox., 13 minutos).
      </p>
      <h3>Por que estou fazendo isso?</h3>
      <p>
        De trivela, meu amigo <a href="https://twitter.com/ferbelottodev">Fer</a> me chamou de sedentária. Agora corro... hehe
      </p>
      <h3>
        E se o dia estiver quente ou frio demais, se for feriado, se eu estiver ferida, sem tempo ou, até mesmo, doente?
      </h3>
      <p>
        <em>#LaurinhaRunEveryDayAnyWay</em>
      </p>
      <h3>Faltar algum dia?</h3>
      <p>Nunca.</p>
    </FaqStyled>
  );
}
