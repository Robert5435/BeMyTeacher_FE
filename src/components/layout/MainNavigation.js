import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  async function Logout(){
    await fetch("https://localhost:5001/Users/Logout", {
      headers: { 'Content-Type': 'application/json' },
      credentials:'include',
  });
  props.setName();
  }
  let menu;

  if(!props.name){
    menu = (        
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tutoring-ads">Tutoring Ads</Link>
      </li>
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
    )
  } else{
    menu = (      
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/add-tutoringad">Create Tutoring Ad</Link>
      </li>
      <li>
        <Link to="/tutoring-ads">Tutoring Ads</Link>
      </li>
      <li>
        <Link to="/login" onClick={Logout}>Logout</Link>
      </li>
    </ul>)
  }







  return (
    <header className={classes.header}>
      <Link to="/"><div className={classes.logo}>BeMyTeacher</div></Link>
      
      <nav>
        {menu}
      </nav>
    </header>
  );
}

export default MainNavigation;
