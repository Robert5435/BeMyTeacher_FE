import { useEffect, useState } from "react";
import AdsContainer from "../components/Profile/AdsContainer";
import ProfileItem from "../components/Profile/ProfileItem";
import Card from "../ui/Card";
import classes from "./Profile.module.css"

function ProfilePage(props) {
    const [loadedTutoringAds, setLoadedTutoringAds] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        fetch("https://localhost:5001/TutoringAds/TutoringAdsOfUser",
        {
            headers: { 'Content-Type': 'application/json' },
            credentials:'include',
        }).then(response => {
            return response.json();
        }).then(data => {
            const tutoringAds = [];
            for (const key in data) {
                const tutoringAd = {
                    id: key,
                    ...data[key]
                };
                tutoringAds.push(tutoringAd);
            }
            setLoadedTutoringAds(tutoringAds);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return <section className={classes.section} >
        <ProfileItem name={props.name} />
        <AdsContainer ads={loadedTutoringAds} />
    </section>
}

export default ProfilePage;