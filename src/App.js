import React, {useRef, useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [amount, setAmount] = useState(0);
  const [iteration, setIteration] = useState(0);
  const numberRef = useRef();


  const submit = event =>
  {
    event.preventDefault();
    setIteration(iteration+1);
    setNumber(parseInt(numberRef.current.value) + number);
    if( number === 0)
      setAmount(1);
    else
      setAmount(number / iteration);
  }

  return(
      <div>
        <form onSubmit={submit}>
          Liczba:
          <input type="number" pattern="[0-9]*" ref={numberRef} required={true}/>
          <button type={"submit"}>Policz</button>
        </form>
        <h3>Suma: {number}</h3>
        <h3>Średnia: {amount}</h3>
      </div>
  );
}

export default App;
