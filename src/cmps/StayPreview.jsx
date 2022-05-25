// import { StayPreview } from "../assets/img/

export function StayPreview({stay}) {

    // let url  = '../assets/img/'+stay.imgUrls[0]
    // console.log('url',url)
    return (
        <div className="stay-card">
            <img src='https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480425/001_urftcv.jpg'></img>
            {/* <img src={require('../assets/img/'+stay.imgUrls[0])}></img> */}
            <h1>{stay.name}</h1>
        </div>
    )
}