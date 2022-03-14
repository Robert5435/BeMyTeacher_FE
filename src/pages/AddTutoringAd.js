import CreateTutoringAdForm from "../components/CreateTutoringAdForm";
import classes from "./AddTutoringAd.module.css"

function AddTutoringAdPage() {
    function AddTutoringAdHandler(tutoringAdData) {
        fetch("https://localhost:5001/TutoringAds",
        { 
            method: 'POST', 
            body: JSON.stringify(tutoringAdData), 
            headers: { 
                'Content-Type': 'application/json' 
            } ,
            credentials:'include',
        });
    }
    

    return <section className={classes.section}>
        <h1>Add new Tutoring Ad</h1>
        <CreateTutoringAdForm onTutoringAd={AddTutoringAdHandler}/>
    </section>
}

export default AddTutoringAdPage;