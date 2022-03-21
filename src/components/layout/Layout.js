import Footer from "./Footer";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation name={props.name} setName={props.setName}/>
      <main className={classes.main}>
          {props.children}
      </main>
    </div>
  );
}

export default Layout;