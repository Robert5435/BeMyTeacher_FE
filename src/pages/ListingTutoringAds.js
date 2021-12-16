
import TutoringAdsList from "../components/TutoringAdsList";
import { useState, useEffect } from "react";
import Select from 'react-select'
import classes from "./ListingTutoringAds.module.css";


const DUMMY_DATA = [
    {
        id: "1",
        image: 'https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?s=612x612',
        user: "Gabriel Cornel",
        title: "My first ad",
        content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        subject: "Mathematics",
        calification: "Licensed",
        availablityOnline: 1,
        availablityHome: 1,
        availablityStudentsHome: 0,
        location: "Bucharest",
        price: 120,
        lenghtInMinutes: 60,
        date: "2000-10-01"
    },
    {
        id: "2",
        image: 'https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?s=612x612',
        user: "Costel Popescu",
        title: "My Second ad",
        content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        subject: "Mathematics",
        calification: "Licensed",
        availablityOnline: 1,
        availablityHome: 1,
        availablityStudentsHome: 0,
        location: "Bucharest",
        price: 120,
        lenghtInMinutes: 60,
        date: "2000-10-01"
    }
]

function ListingTutoringAdsPage() {

    const [subject, setSubject] = useState();
    const [location, setLocation] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTutoringAds, setLoadedTutoringAds] = useState([]);
    const optionsSubject = [
        { value: 1, label: 'Mathematics' },
        { value: 2, label: 'History' },
        { value: 3, label: 'Computer Science' },
        { value: 4, label: 'English' }
    ]
    const optionsLocation=[
        {value: 1, label:'Bucharest'},
        {value: 2, label:'Brasov'},
        {value: 3, label:'Arad'},
        {value: 4, label:'Constanta'}
    ]
    useEffect(() => {
        setIsLoading(true)
        fetch("https://localhost:5001/TutoringAds").then(response => {
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
            setIsLoading(false);
            setLoadedTutoringAds(tutoringAds); 


        })
    }, []);


    function search(loadedTutoringAds) {
        if(subject || location){
            if(subject){
            loadedTutoringAds = loadedTutoringAds.filter(a => a.subjectId == subject.value)
        }
        
        if(location){
            loadedTutoringAds= loadedTutoringAds.filter(a => a.locationId == location.value)
        }
    }
        return loadedTutoringAds;

    }



    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }



    return (<section>
        <div className={classes.searchContainer}>
            <Select className={classes.searchBar} options={optionsSubject} onChange={setSubject} placeholder={"Subject"} onSelectResetsInput={false} />
            <Select className={classes.searchBar} options={optionsLocation} onChange={setLocation} placeholder={"Location"} onSelectResetsInput={false} />
        </div>
        <TutoringAdsList ads={search(loadedTutoringAds)} />
    </section>)
}

export default ListingTutoringAdsPage;