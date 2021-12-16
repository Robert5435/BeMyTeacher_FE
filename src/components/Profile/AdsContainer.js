import Card from "../../ui/Card";
import ProfileTutoringAds from "./ProfileTutoringAds";
import classes from "./AdsContainer.module.css"

function AdsContainer(){
return <div className={classes.container}>
    <Card>
    <ProfileTutoringAds/>
    <ProfileTutoringAds/>
    <ProfileTutoringAds/>
    <ProfileTutoringAds/>
    <ProfileTutoringAds/>
    </Card>
</div>
}


export default AdsContainer;