import React, {useRef, useState} from 'react';
import './App.css';

function App() {
    const [newText, setNewText] = useState("");
    const [newText2, setNewText2] = useState("");
    const [newRadioButton, setNewRadioButton] = useState("");
    const [newCheck, setNewCheck] = useState("");
    const [newDropDown, setNewDropDown] = useState("");

    const text = useRef();
    const text2 = useRef();
    const radioButton = useRef();
    const check = useRef();
    const dropDown = useRef();

    const submit = event => {
        event.preventDefault();
        setNewText(text.current.value);
        setNewText2(text2.current.value);
        setNewDropDown(dropDown.current.value);
        //setNewRadioButton(radioButton.current.value);
    }

    const handleCheck = (event) => {
        setNewCheck(event.target.value)
    }

    const handleRadioButton = (event) => {
        setNewRadioButton(event.target.value)
    }

    const reset = event => {
        event.preventDefault();
        setNewText("");
        setNewText2("");
        setNewRadioButton("");
        setNewCheck("");
    }

  return(
     <div>
        <form onSubmit={submit}>
            <input type="text" ref={text}/> <br/>
            <input type="text" ref={text2}/> <br/>
            <div onChange={handleRadioButton.bind(this)}>
                <input type="radio" value="MALE" name="gender"/> Male
                <input type="radio" value="FEMALE" name="gender"/> Female
            </div>
            <br/>
            <select ref={dropDown}>
                <option value={"Rower"}>Rower</option>
                <option value={"Inny Rower"}>Inny rower</option>
            </select>
            <br/>
            <input id={"check"} ref={check} type="checkbox" onClick={handleCheck} value={"prawda"}/> Prawda
            <br/>
            <button type={"submit"}>Wyslij</button> <br/>
            <button type={"reset"} onClick={reset}>Reset</button>
        </form>
         <table>
             <thead>
                 <tr>
                     <th>Text</th>
                     <th>Text2</th>
                     <th>Radio</th>
                     <th>Drop down</th>
                     <th>Checkbox</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>{newText}</td>
                     <td>{newText2}</td>
                     <td>{newRadioButton}</td>
                     <td>{newDropDown}</td>
                     <td>{newCheck}</td>
                 </tr>
             </tbody>
         </table>
     </div>
  );
}

export default App;
