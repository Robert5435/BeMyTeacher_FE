import { Link } from "react-router-dom";
import { Redirect} from "react-router-dom";
import Card from "../../ui/Card";
import classes from "./ProfileTutoringAds.module.css"

function ProfileTutoringAds(props){
    console.log(props.pricePerSession, props.subject,props.location)

    function handleDelete(){
        fetch("https://localhost:5001/TutoringAds/"+props.id,
        { 
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' } ,
            credentials:'include',
        });
        window.location.reload();
    }

    var link = "/edit/" + props.id;

    return <div className={classes.cards}> 
    <Card>
        <p className={classes.title}>{props.title}</p>
        <div className={classes.actions}>
        <button onClick={handleDelete} >Delete</button><Link to={link} className="btn btn-primary">Edit</Link>
        </div>
        <span className={classes.subject}>{props.subject}</span>
        <span className={classes.location}>{props.location}</span>
        <p className={classes.price}>Price/Session lenght: {props.pricePerSession}Lei/ {props.sessionLenghtinMinutes} Min</p>
    </Card>
    </div>
    }
    
    
    export default ProfileTutoringAds;