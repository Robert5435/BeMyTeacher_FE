import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>BeMyTeacher</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-tutoringad">Create Tutoring Ad</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/tutoring-ads">Tutoring Ads</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
