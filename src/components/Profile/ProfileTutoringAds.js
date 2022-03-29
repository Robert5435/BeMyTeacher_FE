import Modal from "../../ui/Modal"
import { Link } from "react-router-dom";
import { Redirect} from "react-router-dom";
import Card from "../../ui/Card";
import classes from "./ProfileTutoringAds.module.css"
import {useAtom} from 'jotai';
import {isModal,isDeleting} from '../../STORE'

function ProfileTutoringAds(props){
    const [showModal, setShowModal] = useAtom(isModal);
    const [isDeletingAd, setIsDeletingAd] = useAtom(isDeleting);

    function handleDelete(){
        fetch("https://localhost:5001/TutoringAds/"+props.id,
        { 
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' } ,
            credentials:'include',
        });
        
        
    }

    var link = "/edit/" + props.id;

    if(isDeletingAd){
        handleDelete()
        setIsDeletingAd(false)
        setShowModal(false)
        window.location.reload();
        
    }

    return (
    <div className={classes.cards}> 
    <Card>
        <p className={classes.title}>{props.title}</p>
        <div className={classes.actions}>
            <Link to={link}><button className="btn"><i className="fa fa-pencil"></i></button></Link>
            <button onClick={()=>{setShowModal(true)}} className="btn"><i className="fa fa-trash" ></i></button>
        </div>
        <span className={classes.subject}>{props.subject}</span>
        <span className={classes.location}>{props.location}</span>
        <p className={classes.price}>Price/Session lenght: {props.pricePerSession}Lei/ {props.sessionLenghtinMinutes} Min</p>
    </Card>
    </div>
    )
    }
    
    
    export default ProfileTutoringAds;