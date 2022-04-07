import Card from "../ui/Card";
import ProfileItem from "./Profile/ProfileItem";
import classes from "./TutoringAdDetailed.module.css"
import { Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StarsRating from "../ui/StarsRating";
import { atom } from "jotai";
import {user} from "../STORE.js";

function TutoringAdDetailed(props){
    console.log(props)
    if(props.tutoringAd){
        if(props.tutoringAd.availabilityOnline){
            var online = "Available online"
        }else{
            var online = " Not available online"
        }
        if(props.tutoringAd.availabilityHome){
            var home = "Available at home"
        }else{
            var home = "Not available at home"
        }
        if(props.tutoringAd.availabilityStudentHome){
            var stundentHome = "Available at student's home"
        }else{
            var stundentHome = "Not available at student's home"
        }
        
        let photoURL = `https://localhost:5001/images/${props.tutoringAd.photoPath}`
        let photoUser = `https://localhost:5001/images/${props.tutoringAd.userPhoto}`
    return (
        <div>
        <Card>
    <div className={classes.container}>
        <div className={classes.mainInfo}>
        <Card>
        <div className={classes.price}>
            <h3>{props.tutoringAd.pricePerSession} Lei/{props.tutoringAd.sessionLenghtinMinutes} Mins</h3>
        </div>
        <div className={classes.img}>
            <img src={photoURL} alt=""></img>
        </div>

        <div className={classes.name}>
        <h3>{props.tutoringAd.title}</h3>
        </div>
        <div className={classes.content}>
        <Card>
        <div className={classes.content}>
            <span className={classes.location}>{props.tutoringAd.location}</span>
            <span className={classes.subject}>{props.tutoringAd.subject}</span>
        </div>
        </Card>
        </div>
        <div className={classes.content}>
            <p>{props.tutoringAd.content}</p>
        </div>
        </Card>
        </div>

        <div className={classes.secondInfo}>
        <Card>
        <div className={classes.contentSecondInfo}>
            <p>{online}</p>
            <p>{home}</p>
            <p>{stundentHome}</p>
            <p>Calification: {props.tutoringAd.calification}</p>
        </div>
        </Card>
        <div>
        <div className={classes.profileItem}>
        <Card>
            <div className={classes.thumbnailContainer}>
            <img className={classes.thumbnail} src={photoUser} alt =''></img>
            </div>
            <p className={classes.profileName}>{props.tutoringAd.username}</p>
            <div className={classes.phNumber}>
            <StarsRating userId={props.tutoringAd.userId} readOnly={true} rating={props.tutoringAd.ratingUser} rateCounter={props.tutoringAd.ratingCounter}/>
            <StarsRating userId={props.tutoringAd.userId} rateCounter={props.tutoringAd.ratingCounter}/>
            </div>
            <div className={classes.actions}>
            <button >Send a message</button>
            </div>
        </Card>
        </div>
        </div>
        </div>




        

    </div>
    </Card>
    </div>)}else{return <p>Loading...</p>}
}


export default TutoringAdDetailed;