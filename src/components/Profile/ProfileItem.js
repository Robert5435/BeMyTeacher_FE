import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import classes from "./ProfileItem.module.css"

function ProfileItem(props){


    return <div className={classes.profileItem}>
        <Card>
            <div className={classes.thumbnailContainer}>
            <img className={classes.thumbnail} src='https://avatars.githubusercontent.com/u/48838006?v=4' alt =''></img>
            </div>
            <p className={classes.phNumber}>0731512092</p>
            <p className={classes.name}>{props.name}</p>
            <div className={classes.actions}>
            <button >Change phone number</button>
            </div>
        </Card>
        </div>
    
}

export default ProfileItem;