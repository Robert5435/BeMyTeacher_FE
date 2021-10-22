import MainNavigation from "../components/layout/MainNavigation";
import Subject from "../components/Subject";

function HomePage(){
    return (

    <section >
        <MainNavigation/>
        <section style={{
            width: "1000",
            height: "400px",
        }}>
            <img  style={{width: "100%"}}
            src="https://www.ppt-backgrounds.net/uploads/library-slides-downloads.jpeg"/>
        </section>
        Home Page
        <section style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
        <Subject name="Mathematics"/>
        <Subject name="English"/>
        <Subject name="History"/>
        </section>
    </section>
    )
}


export default HomePage;