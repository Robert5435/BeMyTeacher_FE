import TutoringAd from "../components/TutoringAd";
import TutoringAdsList from "../components/TutoringAdsList";


const DUMMY_DATA=[
    {
        id:"1",
        image:'https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?s=612x612',
        user:"Gabriel Nar",
        title: "My first ad",
        content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        subject: "Mathematics",
        calification:"Licensed",
        availablityOnline: 1,
        availablityHome: 1,
        availablityStudentsHome: 0,
        location:"Bucharest",
        price: 120,
        lenghtInMinutes:60,
        date:"2000-10-01"
    },
    {
        id:"2",
        image:'https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?s=612x612',
        user:"Costel Popescu",
        title: "My Second ad",
        content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        subject: "Mathematics",
        calification:"Licensed",
        availablityOnline: 1,
        availablityHome: 1,
        availablityStudentsHome: 0,
        location:"Bucharest",
        price: 120,
        lenghtInMinutes:60,
        date:"2000-10-01"
    }
]

function ListingTutoringAdsPage(){


    return <section>
        <h1>All ads</h1>
        <TutoringAdsList ads={DUMMY_DATA}/>
    </section>
}

export default ListingTutoringAdsPage;