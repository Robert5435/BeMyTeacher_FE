import CreateTutoringAdForm from "../components/CreateTutoringAdForm";
import classes from "./AddTutoringAd.module.css"

function AddTutoringAdPage() {

    function AddTutoringAdHandler(tutoringAdData,selectedFile) {
        var formData = new FormData()
        formData.append("tutoringAd", JSON.stringify(tutoringAdData))
        formData.append("file", selectedFile)
        fetch("https://localhost:5001/TutoringAds",
        { 
            method: 'POST', 
            body: formData,
            credentials:'include',
        });
    }
    

    return <section className={classes.section}>
        <h1>Add new Tutoring Ad</h1>
        <CreateTutoringAdForm onTutoringAd={AddTutoringAdHandler}/>
    </section>
}

export default AddTutoringAdPage;