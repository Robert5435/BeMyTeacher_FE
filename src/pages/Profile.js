import AdsContainer from "../components/Profile/AdsContainer";
import ProfileItem from "../components/Profile/ProfileItem";
import Card from "../ui/Card";
import classes from "./Profile.module.css"

function ProfilePage(props){
    return <section className={classes.section} >
        <ProfileItem name={props.name} />
        <AdsContainer/>
    </section>
}

export default ProfilePage;