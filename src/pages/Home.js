import MainNavigation from "../components/layout/MainNavigation";
import Subject from "../components/Subject";
import SearchBar from "../ui/SearchBar";

function HomePage(){
    return (

    <section >
        <MainNavigation/>
        <section style={{
            height: "100px",
        }}>
            <img  style={{width: "100%"}}
            src="https://www.eiopa.europa.eu/sites/default/files/styles/eiopa_image_style/public/images/adobestock_document_library.jpeg?itok=NEMXMsEn" alt=""/>
            
            {/* https://www.ppt-backgrounds.net/uploads/library-slides-downloads.jpeg https://www.eiopa.europa.eu/sites/default/files/styles/eiopa_image_style/public/images/adobestock_document_library.jpeg?itok=NEMXMsEn */}
        </section>
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