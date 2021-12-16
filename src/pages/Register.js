import RegisterForm from "../components/RegisterForm";
import classes from "./Register.module.css"
function RegisterPage(){
    return <section className={classes.section}>
        <h1>Register</h1>
        <RegisterForm/>
    </section>
}

export default RegisterPage;