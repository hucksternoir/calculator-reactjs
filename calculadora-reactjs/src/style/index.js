import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        color: #fff;
    }

    body{
      display: grid;
      place-items: center;
      background-image: linear-gradient(90deg, #5f05a3, #000);

    }
`;

export const Spacer = styled.div`
  margin-top: ${(props) => props.margin || "39px"};
`;

export const Container = styled.div`
  background-color: #000;
  width: 484px;
  height: auto;
  margin: auto;
  padding: 16px;
`;

export const Visor = styled.div`
  background: #204515;
  width: 100%;
  height: 100px;
  border: none;
  font-size: 3.3rem;
  padding: 10px 15px;
  box-sizing: border-box;
  p {
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: #101010;
  }
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;

  .roxo {
    background-color: #5f05a3;
  }

  .operacoes {
    background-color: #ad4bf7;
  }

  .especial {
    background-color: #309f00;
  }

  button {
    border: none;
    border-radius: 4px;
    height: 65px;
    font-size: 44px;
    background-color: #3d3d3d;
  }

  button:hover {
    background-color: #101010;
  }

  button:active {
    background-color: #5f032f;
  }
`;
