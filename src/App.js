import React, {useRef, useState} from 'react';
import Users from "./data/users"
import './App.css';

function App() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [data] = useState(Users);

    const handleEmail = event =>
    {
        setEmail(event.target.value);
    }

    const handlePassword = event =>
    {
        setPassword(event.target.value);
    }

    const handleLogin = event =>
    {
        event.preventDefault();

        let passAreGood = false;

        data.map(data => {
            if ( data.email === email && data.password === password)
            {
                passAreGood = true;
            }
        });

        if(passAreGood)
        {
            alert("Udało się zalogować")
        }
        else
            alert("Błędne dane!")
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <input type="text"  onChange={handleEmail} required={true} pattern="[A-Za-z0-9]+@+[a-z0-9]+\.[a-z]+$"/>
                <br/>
                <input type="password" onChange={handlePassword} required={true} pattern="[A-Za-z0-9]+$"/>
                <br/>
                <button type="submit">Zaloguj</button>
            </form>
        </div>
    );
}

export default App;
