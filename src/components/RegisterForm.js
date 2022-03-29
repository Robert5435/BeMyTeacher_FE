import Card from "../ui/Card";
import classes from "./RegisterForm.module.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRef, useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';

function RegisterForm() {
    const history = useHistory();
    const [redirect, setRedirect] = useState(false);

    const initialValues = { username: "", email: "", password: "" , repeatPass: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    };

    useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    submitData()
  }
}, [formErrors]);
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be more than 6 characters";
  }
  if(!values.repeatPass){
      errors.repeatPass = "Password is required";
  }else if(values.repeatPass != values.password){
      errors.repeatPass = "Passwords do not match"
  }
  return errors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

    async function submitData() {
        let name = formValues.username;
        let email = formValues.email;
        let password = formValues.password;

        await fetch("https://localhost:5001/Users/register", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
            })
        });
        setRedirect(true);
        history.replace('/login');

    }
    if (redirect) {
        <Redirect to="/login" />
    }

    return <Card>
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.control}>
                <label htmlFor="email">Name</label>
                <input type='text' name="username" required onChange={handleChange} defaultValue={formValues.username}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type='email' name="email" required onChange={handleChange} defaultValue={formValues.email}></input>
                
            </div>
            <p>{formErrors.email}</p>
            <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type='password' name="password" required onChange={handleChange} defaultValue={formValues.password}></input>
            </div>
            <p>{formErrors.password}</p>
            <div className={classes.control}>
                <label htmlFor="password">Repeat Password</label>
                <input type='password' name="repeatPass" required onChange={handleChange} defaultValue={formValues.repeatPass}></input>
            </div>
            <p>{formErrors.repeatPass}</p>
            <div className={classes.actions}>
                <button>Register</button>
            </div>

        </form>
    </Card>

}

export default RegisterForm;
