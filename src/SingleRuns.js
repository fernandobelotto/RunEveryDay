// import React from "react";
// import styled from "styled-components";

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   font-family: "Roboto Condensed";
//   text-align: left;
//   padding-left: 30px;
//   padding-right: 30px;
//   border-bottom: 1px solid black;
//   align-items: center;
//   height: 36px;
//   @media screen and (max-width: 800px) {
//     display: block;
//     padding-top: 20px;
//     height: auto;
//   }
// `;

// const Day = styled.div`
//   flex: 1;
//   @media screen and (max-width: 800px) {
//     display: inline-block;
//   }
// `;

// const Time = styled.div`
//   flex: 1;
//   @media screen and (max-width: 800px) {
//     display: block;
//     font-size: 1.8em;
//     margin-right: 15px;
//     &:before {
//       content: "Day ";
//     }
//   }
// `;

// const DateColumn = styled.div`
//   flex: 2;
//   @media screen and (max-width: 800px) {
//     display: inline-block;
//     margin-right: 15px;
//     &:before {
//       content: "Date: ";
//     }
//   }
// `;

// const Distance = styled.div`
//   flex: 1;
//   @media screen and (max-width: 800px) {
//     display: inline-block;
//     margin-right: 15px;
//     &:before {
//       content: "Distance: ";
//     }
//   }
// `;

// const City = styled.div`
//   flex: 2;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   @media screen and (max-width: 800px) {
//     margin-right: 15px;
//     &:before {
//       content: "Location: ";
//     }
//   }
// `;

// const StravaLink = styled.div`
//   flex: 1;
//   @media screen and (max-width: 800px) {
//     display: inline-block;
//     margin-right: 15px;
//   }
// `;

// export const Header = () => {
//   const isMobile = useMedia("(max-width: 800px)");
//   if (isMobile) {
//     return null;
//   }
//   return (
//     <div>
//       <Row style={{ background: "white", flex: 0 }}>
//         <Time>Dia</Time>
//         <DateColumn>Data</DateColumn>
//         <Day>Horas</Day>
//         <Distance>Distância</Distance>
//         <City>Cidade</City>
//         <StravaLink>Run</StravaLink>
//       </Row>
//     </div>
//   );
// };

