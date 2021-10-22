import TutoringAd from "./TutoringAd";

function TutoringAdsList(props){
    console.log(props.ads);
    return (
        
        <ul>
            {props.ads.map((ad) =>(
                <TutoringAd
                key={ad.id}
                id={ad.id}
                image={ad.image}
                title={ad.title}
                content={ad.content}
                location={ad.location}
                subject={ad.subject}
                price={ad.price}
                lenghtInMinutes={ad.lenghtInMinutes}
                />
            ))}
        </ul>
    )
}

export default TutoringAdsList;