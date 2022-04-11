const Contador = () => {
  const [contador, setContador] = React.useState(0);

  const aumentarCont = () => setContador(contador + 1);

  const disminuirCont = () => setContador(contador - 1);

  return (
    <div>
      <span>Contador:</span>
      <span
        className={contador === 0 ? " cero" : contador < 0 ? "menor" : "mayor"}
      >
        {contador}
      </span>
      <hr></hr>

      <button className="buttonAumentar" onClick={aumentarCont}>
        Aumentar{" "}
      </button>
      <button className="buttonDisminuir" onClick={disminuirCont}>
        Disminuir{" "}
      </button>
    </div>
  );
};
