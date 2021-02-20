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
        Eu devo
        <span style={{ borderBottom: "1px solid" }}>correr diariamente!</span>
        Um dia começa e termina às 2 da manhã. A distância mínima é 2.5km
        (aproxiadamente 13 minutos).
      </p>
      <h3>Por que estou fazendo isso?</h3>
      <p>
        Eu me senti extremamente sedentária após meu amigo
        <a href="http://ferfazteusite">@Fernando</a>
        julgar descaradamente aqueles que não praticam exercícios físicos.
        Portanto, comecei a correr. Desde então, acumulei algumas corridas sem
        faltar nenhum dia! Agora, não pretendo parar... isso seria profundamente
        devastador (ao meu ego).
      </p>
      <h3>
        E se for um dia realmente muito quente ou frio; ou se for feriado; ou se
        eu estiver ferida; ou sem tempo; ou, até mesmo, doente?
      </h3>
      <p>
        <em>#RunEveryDayAnyWay</em>
      </p>
      <h3>Pular algum dia?</h3>
      <p>Nunca.</p>
    </FaqStyled>
  );
}
