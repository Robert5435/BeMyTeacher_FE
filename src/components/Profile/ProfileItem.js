import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import classes from "./ProfileItem.module.css"

function ProfileItem(){
    const [name,setName] = useState();

    useEffect(() =>{
        (
            async () =>{
                const response = await fetch("https://localhost:5001/Users/login", {
                    headers: { 'Content-Type': 'application/json' },
                    credentials:'include',
                });

                const content = await response.json();

                setName(content.name);
            }
        )();
    })

    return <div className={classes.profileItem}>
        <Card>
            <img className={classes.thumbnail} src='https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?s=612x612' alt =''></img>
            <p className={classes.phNumber}>0731512092</p>
            <button className={classes.actions}>Send a message</button>
        </Card>
        </div>
    
}

export default ProfileItem;