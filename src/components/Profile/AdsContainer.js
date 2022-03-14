import Card from "../../ui/Card";
import ProfileTutoringAds from "./ProfileTutoringAds";
import classes from "./AdsContainer.module.css"

function AdsContainer(props){
    console.log(props.ads)

return <div className={classes.container}>
    <Card>
    {props.ads.map((ad) =>(
            
            <ProfileTutoringAds 
                key={ad.id}
                id={ad.id}
                image={ad.image}
                title={ad.image}
                subject={ad.subject}
                location={ad.location}
                pricePerSession={ad.pricePerSession}
                sessionLenghtinMinutes={ad.sessionLenghtinMinutes}
            />
            
    ))}
    </Card>

</div>
}


export default AdsContainer;