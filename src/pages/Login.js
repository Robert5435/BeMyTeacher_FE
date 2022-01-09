import LoginForm from "../components/LoginForm";
import classes from "./Login.module.css"

function LoginPage(props){
    return <section className={classes.section}>
    <h1>Log In</h1>
    <LoginForm setName={props.setName}/>
</section>
}


export default LoginPage;