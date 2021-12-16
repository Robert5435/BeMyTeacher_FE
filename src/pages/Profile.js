import AdsContainer from "../components/Profile/AdsContainer";
import ProfileItem from "../components/Profile/ProfileItem";
import Card from "../ui/Card";
import classes from "./Profile.module.css"

function ProfilePage(){
    return <section className={classes.section} >
        <ProfileItem  />
        <AdsContainer/>
    </section>
}

export default ProfilePage;