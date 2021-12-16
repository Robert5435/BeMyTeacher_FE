import LoginForm from "../components/LoginForm";
import classes from "./Login.module.css"

function LoginPage(){
    return <section className={classes.section}>
    <h1>Log In</h1>
    <LoginForm/>
</section>
}


export default LoginPage;