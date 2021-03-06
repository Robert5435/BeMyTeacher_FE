import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import UploadImage from "../UploadImage";
import classes from "./ProfileItem.module.css";
import {useAtom} from 'jotai';
import {isEditProfileModal, user} from '../../STORE';

function ProfileItem(props){
        const [showModal, setShowModal] = useAtom(isEditProfileModal);
        const [userInfo, setUserInfo] = useAtom(user);
        if(userInfo.photoPath != null){
            var url = "https://localhost:5001/images/" + userInfo.photoPath;
        }else{
            var url = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
        }

        
        if(user){
            return <div className={classes.profileItem}>
            <Card>
                <div className={classes.thumbnailContainer}>
                <img className={classes.thumbnail} src={url} alt =''></img>
                </div>
                <p className={classes.phNumber}>{userInfo.phoneNumber}</p>
                <p className={classes.name}>{userInfo.name}</p>
                <div className={classes.actions}>
                <button onClick={()=>{setShowModal(true)}}>Edit Profile</button>
                </div>
            </Card>
            </div>
        }else{
            return <p>Loading...</p>
        }



    
}

export default ProfileItem;