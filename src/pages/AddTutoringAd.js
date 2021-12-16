import CreateTutoringAdForm from "../components/CreateTutoringAdForm";
import classes from "./AddTutoringAd.module.css"

function AddTutoringAdPage() {
    function AddTutoringAdHandler(tutoringAdData) {
        debugger;
        console.log(JSON.stringify(tutoringAdData))
        console.log("aici")
        fetch("https://localhost:5001/TutoringAds",
        { 
            method: 'POST', 
            body: JSON.stringify(tutoringAdData), 
            headers: { 
                'Content-Type': 'application/json' 
            } 
        });
    }
    

    return <section className={classes.section}>
        <h1>Add new Tutoring Ad</h1>
        <CreateTutoringAdForm onTutoringAd={AddTutoringAdHandler}/>
    </section>
}

export default AddTutoringAdPage;