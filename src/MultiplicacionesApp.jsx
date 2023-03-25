import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

let arr = [];
let fin = 'Tabla del ';
const tablasM = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const MultiplicacionesApp = () => {

  const [multiplicador, setMultiplicador] = useState(1)
  const [tabla, setTabla] = useState(1);
  const [puntaje, setPuntaje] = useState(0);
  const [visible, setVisible] = useState(true);
  const inputRef = useRef(null)


  useEffect(() => {
    if (puntaje % 20 === 0 && puntaje != 0 && tabla <= 9) {
      setTabla(tabla + 1);
      setVisible(true);
    }
  }, [puntaje])

  useEffect(() => {
    if (puntaje % 20 === 0 && puntaje != 0 && tabla <= 9) {
      setVisible(false);
      setTimeout(() => {
        setVisible(true);
      }, 1000);
    }
    else if (puntaje % 20 === 0 && tabla == 10) {
      setVisible(false);
      setTabla('');
      fin = '¡Felicidades!';
    }
  }, [puntaje]);

  useEffect(() => {
    inputRef.current.focus();
  }, [puntaje]);

  if (arr[0] == multiplicador && arr.length >= 0) {
    setMultiplicador(Math.floor(Math.random() * 10) + 1);
    console.log('¡Se repitió!');
  }

  const getTable = () => {
    const getN = document.querySelector('#tablas').value;
    setTabla(Number(getN));
  }

  const calcular = () => {
    const resultadoU = document.querySelector("#resultado");
    const resultado = tabla * multiplicador;

    if (resultadoU.value == resultado) {
      setPuntaje(puntaje + 1);
      resultadoU.value = "";
      arr.unshift(multiplicador);
      setMultiplicador(Math.floor(Math.random() * 10) + 1);
    }

  }

const [test, setTest] = useState('');

  const calcular2 = (e) => {
    console.log(e.key);
    setTest(JSON.stringify(e.key));
    if (e.key === 'Enter' || e.key === 'Return' || e.code === 'Enter') {
      const resultadoU = document.querySelector("#resultado");
      const resultado = tabla * multiplicador;
      if (resultadoU.value == resultado) {
        setPuntaje(puntaje + 1);
        resultadoU.value = "";
        arr.unshift(multiplicador);
        setMultiplicador(Math.floor(Math.random() * 10) + 1);
      }
    }
  }


  return (
    <>
      {
        visible ? (
          <>
            <h1>Tablas de multiplicar</h1>
            <div>{tabla} <span>x</span>  {multiplicador} = <input type="number" id="resultado" ref={inputRef} onKeyDown={calcular2}/> </div>
            <div>{test}</div>
            <button onClick={calcular}>Verificar</button>
            <div>Puntaje = {puntaje}</div>
            <br />
            <div>Elige la tabla que desees: </div>
            <select name="tablas" id="tablas">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <button onClick={getTable}>Aplicar</button>
          </>
        ) :
          <>
            <h1>{fin} {tabla}</h1>
            {/* <h2>Tu resultado final fue de: {puntaje}</h2> */}
          </>

      }
    </>
  )
}

// MultiplicacionesApp.propTypes = {
//   value: PropTypes.number,
//   // tabla: PropTypes.number
// }

// MultiplicacionesApp.defaultProps = {
//   tabla: 1,
//   // multiplicador: 1
// }