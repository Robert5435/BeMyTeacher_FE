import Card from "../../ui/Card";
import classes from "./ProfileTutoringAds.module.css"

function ProfileTutoringAds(props){

    function handleDelete(){
        fetch("https://localhost:5001/TutoringAds/"+props.id,
        { 
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' } ,
            credentials:'include',
        });
    }




    return <div className={classes.cards}> <Card>
        <p className={classes.title}>{props.title}</p>
        <div className={classes.actions}>
        <button onClick={handleDelete}>Delete</button>
        </div>
        <span className={classes.subject}>{props.subject}</span>
        <span className={classes.location}>{props.location}</span>
        <p className={classes.price}>Price/Session lenght: {props.pricePerSession}Lei/ {props.sessionLenghtinMinutes} Min</p>
    </Card>
    </div>
    }
    
    
    export default ProfileTutoringAds;