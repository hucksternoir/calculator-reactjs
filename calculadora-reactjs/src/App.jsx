import { Container, Spacer, Visor, ButtonGrid } from "./style";
import { useState } from "react";

function App() {
  const [num, setNum] = useState("");

  function digito(e) {
    setNum(num + e.target.value);
  }

  function clear() {
    setNum("");
  }

  function percent() {
    setNum(num / 100);
  }

  function inverse() {
    setNum(num * -1);
  }

  function apagarDigito() {
    setNum(num.slice(0, -1));
  }

  function igual() {
    setNum(eval(num));
  }
  return (
    <>
      <Spacer margin="15vh" />
      <Container>
        <Visor>
          <p>{num}</p>
        </Visor>
        <Spacer margin="16px" />
        <ButtonGrid>
          <button className="especial" onClick={clear}>
            AC
          </button>
          <button className="especial" onClick={apagarDigito}>
            del
          </button>
          <button className="especial" onClick={percent}>
            %
          </button>
          <button className="especial" onClick={inverse}>
            +/-
          </button>

          <button value={"7"} onClick={digito}>
            7
          </button>
          <button value={"8"} onClick={digito}>
            8
          </button>
          <button value={"9"} onClick={digito}>
            9
          </button>
          <button className="operacoes" onClick={digito} value={"*"}>
            *
          </button>

          <button value={"4"} onClick={digito}>
            4
          </button>
          <button value={"5"} onClick={digito}>
            5
          </button>
          <button value={"6"} onClick={digito}>
            6
          </button>
          <button className="operacoes" value={"+"} onClick={digito}>
            +
          </button>

          <button value={"1"} onClick={digito}>
            1
          </button>
          <button value={"2"} onClick={digito}>
            2
          </button>
          <button value={"3"} onClick={digito}>
            3
          </button>
          <button className="operacoes" value={"/"} onClick={digito}>
            /
          </button>

          <button value={"0"}>0</button>
          <button value={"."}>.</button>
          <button className="operacoes" value={"-"} onClick={digito}>
            -
          </button>
          <button className="roxo" onClick={igual}>
            =
          </button>
        </ButtonGrid>
      </Container>
    </>
  );
}

export default App;
