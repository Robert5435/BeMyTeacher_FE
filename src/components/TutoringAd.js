import Card from "../ui/Card";
import classes from "./TutoringAd.module.css"

function TutoringAd(props){
    return (
    <div className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt=""/>
        </div>

        <div className={classes.content}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>

        <div>
            <p >{props.location}</p>
            <p >{props.subject}</p>
            <p>Price/Session Lenght: {props.price} Lei/{props.lenghtInMinutes} Mins</p>
        </div>
        </Card>

    </div>)
}


export default TutoringAd;