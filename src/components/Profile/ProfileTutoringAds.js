import Card from "../../ui/Card";
import classes from "./ProfileTutoringAds.module.css"

function ProfileTutoringAds(){
    return <div className={classes.cards}> <Card>
        <p className={classes.title}>Title</p>
        <span className={classes.subject}>Subject</span>
        <span className={classes.location}>Location</span>
        <p className={classes.price}>Price/Session lenght: 12 lei/ 120 min</p>
    </Card>
    </div>
    }
    
    
    export default ProfileTutoringAds;