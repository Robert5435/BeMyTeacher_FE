import TutoringAd from "./TutoringAd";
import classes from "./TutoringAdsList.module.css"

function TutoringAdsList(props){

    return (
        
        <div className={classes.item}>
            {props.ads.map((ad) =>(
                
                <TutoringAd
                key={ad.id}
                id={ad.id}
                image={ad.image}
                title={ad.title}
                content={ad.content}
                location={ad.location}
                subject={ad.subject}
                pricePerSession={ad.pricePerSession}
                sessionLenghtinMinutes={ad.sessionLenghtinMinutes}
                photoPath={ad.photoPath}
                />
                
            ))}
        </div>
    )
}

export default TutoringAdsList;