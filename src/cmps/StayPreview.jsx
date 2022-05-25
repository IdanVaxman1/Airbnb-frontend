export function StayPreview({stay}) {


    
    return (
        <div className="stay-card">
            <img src={stay.imgUrls[0]} ></img>
            <h1>{stay.name}</h1>
        </div>
    )
}