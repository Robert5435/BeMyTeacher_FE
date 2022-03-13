import Card from "../ui/Card";
import classes from "./RegisterForm.module.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRef, useState } from "react";
import { Redirect } from 'react-router-dom';

function RegisterForm() {
    const history = useHistory();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [redirect, setRedirect] = useState(false);

    async function submitHandler(event) {
        event.preventDefault();

        await fetch("https://localhost:5001/Users/register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        setRedirect(true);
        history.replace('/login');

    }
    if (redirect) {
        <Redirect to="/login" />
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="email">Name</label>
                <input type='text' required onChange={e => setName(e.target.value)}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type='text' required onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Passowrd</label>
                <input type='password' required onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Repeat Password</label>
                <input type='password'></input>
            </div>
            <div className={classes.actions}>
                <button>Register</button>
            </div>

        </form>
    </Card>

}

export default RegisterForm;