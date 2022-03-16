import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditTutoringAdForm from "../components/EditTutoringAdForm";
import classes from "./AddTutoringAd.module.css"



function EditTutoringAdPage() {
    let { id } = useParams()
    const [loadedTutoringAd, setLoadedTutoringAd] = useState();
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true)
        const loadTutoringAd = async () => {
            const tutoringAd_request = await fetch(
                `https://localhost:5001/TutoringAds/` + id
            );
            if (tutoringAd_request.ok) {
                const tutoringAd_response = await tutoringAd_request.json();
                setLoadedTutoringAd(tutoringAd_response);

            }
        }
        loadTutoringAd();
        setIsLoading(false);

    }, []);

    function Edit(tutoringAdData) {
        fetch("https://localhost:5001/TutoringAds",
            {
                method: 'PUT',
                body: JSON.stringify(tutoringAdData),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });
    }

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }
    else {

        console.log(loadedTutoringAd)


        return <section className={classes.section}>
            <h1>Edit Tutoring Ad</h1>
            <EditTutoringAdForm
                onTutoringAd={Edit}
                tutoringAd={loadedTutoringAd} 
                defaultValues={{value:loadedTutoringAd?.subjectId,label:loadedTutoringAd?.subject}}/>
        </section>
    }


}


export default EditTutoringAdPage;