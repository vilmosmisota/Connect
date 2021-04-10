import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    })

    const {name, email, password} = inputs;
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value });
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {

            const body = {name, email, password}

            const response = await fetch("http://localhost:3001/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            localStorage.setItem("token", parseRes.token);

            setAuth(true);
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <h1>REGISTER</h1>
            <form onSubmit={onSubmitForm}> 
                <input 
                    type="text" 
                    name="name" 
                    placeholder="name"
                    value={ name }
                    onChange={e => onChange(e)} />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="email"
                    value={ email }
                    onChange={e => onChange(e)} />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password"
                    value={ password }
                    onChange={e => onChange(e)} />
                <button>Submit</button>    
            </form>
            <Link to="/login">Login</Link>
            
        </Fragment>
            
    )
}

export default Register;