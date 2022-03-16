import TutoringAdDetailed from "../components/TutoringAdDetailed";
import { Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DetailsTutoringAdsPage(){
    let {id} = useParams()
    const [loadedTutoringAd, setLoadedTutoringAd] = useState();
    useEffect(() => {
        const loadTutoringAd = async () => {
            const tutoringAd_request = await fetch(
                `https://localhost:5001/TutoringAds/`+ id
            );
            if(tutoringAd_request.ok){
                const tutoringAd_response = await tutoringAd_request.json();
                setLoadedTutoringAd(tutoringAd_response);

            }
        }
        loadTutoringAd();
        
    }, []);
    return <div>
        <TutoringAdDetailed tutoringAd={loadedTutoringAd}/>
    </div>
}


export default DetailsTutoringAdsPage;