import classes from "./Footer.module.css";
function Footer(){
    return(
<footer className="text-center text-white" style={{backgroundColor:"#f1f1f1"}}>
  <div className="container pt-4">
    <section className="mb-4">

    </section>
  </div>

  <div class="text-center text-dark p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright:
    <a className="text-dark" href="https://github.com/Robert5435">Developers</a>
  </div>
</footer>
    )
}

export default Footer;