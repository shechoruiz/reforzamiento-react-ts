import { useState } from "react";

const useCounter = (inicial: number = 10) => {
  const [valor, setValor] = useState(inicial);

  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  const disminuir = (numero: number) => {
    setValor(valor - numero);
  };

  return {
    acumular,
    disminuir,
    valor,
  };
};

export default useCounter;
