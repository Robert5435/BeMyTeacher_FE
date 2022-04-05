import Card from "../ui/Card";
import ProfileItem from "./Profile/ProfileItem";
import classes from "./TutoringAdDetailed.module.css"
import { Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StarsRating from "../ui/StarsRating";

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
            <img src="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?s=612x612" alt=""></img>
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
            <img className={classes.thumbnail} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC' alt =''></img>
            </div>
            <p className={classes.profileName}>{props.tutoringAd.username}</p>
            <div className={classes.phNumber}>
            <StarsRating userId={props.userId}/>
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