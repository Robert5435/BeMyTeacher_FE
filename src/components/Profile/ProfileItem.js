import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import UploadImage from "../UploadImage";
import classes from "./ProfileItem.module.css";
import {useAtom} from 'jotai';
import {isEditProfileModal} from '../../STORE';

function ProfileItem(props){
        const [showModal, setShowModal] = useAtom(isEditProfileModal);


    return <div className={classes.profileItem}>
        <Card>
            <div className={classes.thumbnailContainer}>
            <img className={classes.thumbnail} src='https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg' alt =''></img>
            </div>
            <p className={classes.phNumber}>0731512092</p>
            <p className={classes.name}>{props.name}</p>
            <div className={classes.actions}>
            <button onClick={()=>{setShowModal(true)}}>Edit Profile</button>
            </div>
        </Card>
        </div>
    
}

export default ProfileItem;