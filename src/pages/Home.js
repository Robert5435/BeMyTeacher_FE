import { Link } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import Subject from "../components/Subject";
import SearchBar from "../ui/SearchBar";

function HomePage(props){
    return (

    <section >
        <MainNavigation name={props.name}/>
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
        <Link to="/tutoring-ads/?selectedSubjectId=1"><Subject name="Mathematics"/></Link>
        <Link to="/tutoring-ads/?selectedSubjectId=4"><Subject name="English"/></Link>
        <Link to="/tutoring-ads/?selectedSubjectId=2"><Subject name="History"/></Link>
        
        
        </section>
    </section>
    )
}


export default HomePage;