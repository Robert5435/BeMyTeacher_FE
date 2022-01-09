import Card from "../ui/Card";
import classes from "./LoginForm.module.css"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function LoginForm(props){
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [redirect, setRedirect] = useState(false);

    async function submitHandler(event){
        event.preventDefault();

        const response = await fetch("https://localhost:5001/Users/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials:'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        debugger;
        const content = await response.json()
        console.log(content)
        setRedirect(true)
        props.setName(content.email)

    }
    if (redirect) {
        return <Redirect to="/tutoring-ads" />
    }

  

    return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type='text' required id='email' onChange={e => setEmail(e.target.value)}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="password">Passowrd</label>
            <input type='password' required id='password' onChange={e => setPassword(e.target.value)}></input>
        </div>
        <div className={classes.actions}>
            <button type="submit">Log in</button>
        </div>

    </form>
</Card>
}

export default LoginForm;