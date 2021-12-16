import Card from "../ui/Card";
import classes from "./TutoringAd.module.css"

function TutoringAd(props){
    var content = props.content;
    const lenght = content.length;
    if(content.length > 300){

        content = content.substring(0,300);
        content = content + "..."
    }
    return (
    <div className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?s=612x612" alt=""/>
        </div>

        <div className={classes.content}>
            <h3>{props.title}</h3>
            <p>{content}</p>
        </div>

        <div>
            <span className={classes.location}>{props.location}</span> 
            <span className={classes.subject} >{props.subject}</span>
            <br/>
            <p className={classes.price}>Price/Session Lenght: {props.pricePerSession} Lei/{props.sessionLenghtinMinutes} Mins</p>
        </div>
        </Card>

    </div>)
}


export default TutoringAd;