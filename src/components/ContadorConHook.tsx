import useCounter from "../hooks/useCounter";

const ContadorConHook = () => {
  const { acumular, disminuir, valor } = useCounter(10);

  return (
    <>
      <h3>
        Contador con hook: <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        + 1
      </button>
      <button className="btn btn-primary" onClick={() => disminuir(1)}>
        - 1
      </button>
    </>
  );
};

export default ContadorConHook;
