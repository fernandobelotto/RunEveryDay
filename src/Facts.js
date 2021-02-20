// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   flex-direction: row;
//   display: flex;
//   max-width: 900px;
//   border-top: 1px solid black;
//   border-bottom: 1px solid black;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   @media screen and (max-width: 800px) {
//     flex-direction: column;
//     padding-left: 30px;
//   }
// `;

// const Fact = styled.div`
//   flex: 1;
//   text-align: left;
//   @media screen and (max-width: 800px) {
//     display: flex;
//     flex-direction: row;
//   }
// `;

// const Title = styled.div`
//   font-size: 14px;
//   font-weight: bold;
// `;

// const Num = styled.div`
//   font-size: 30px;
//   font-weight: bold;
//   font-family: "Roboto Condensed";
//   @media screen and (max-width: 800px) {
//     font-size: 14px;
//     &:before {
//       content: ": ";
//     }
//   }
// `;

//   render() {
//     // AQUI FER ENTRA COM API CONTAGEM DE DIAS const { total } = this.props;
//     return (
//       <Container>
//         <Fact>
//           <Title>Dia</Title>
//           {/* AQUI ENTRA FER COM CONTAGEM DE DIAS <Num>{total}</Num> */}
//         </Fact>
//         <Fact>
//           <Title>Já corri hoje?</Title>
//           {/* AQUI NOVAMENTE ENTRA FER SE EU CORRI OU NAO <Num>Não!</Num> */}
//         </Fact>
//         <Fact>
//           <Title>
//             WR Progresso{" "}
//             <Tooltip
//               preferredPlacement="top"
//               tip={
//                 <div>
//                   O recorde mundial de "Correr diariament" foi de 19.032 (52 anos e 39 dias),
//                   <br />
//                   conquistado por Ron Hill - de acordo com Streak Runners Internacional!
//                 </div>
//               }
//               style={{
//                 fontFamily: "Arial, Helvetica",
//               }}
//             >
//             </Tooltip>
//           </Title>
//           {/* <Num>{((total / 19032) * 100).AQUI ENTRA FER COM DISTANCIA TOTAL(2)}%</Num> */}
//         </Fact>
//         <Fact>
//           <Title>Distância Total</Title>
//           <Num>
//             {/* AQUI ENTRA FER COM API DE DISTÂNCIA TOTAL */}
//           </Num>
//         </Fact>
//       </Container>
//     );
//   }
// }