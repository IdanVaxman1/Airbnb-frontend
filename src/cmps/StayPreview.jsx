// import { StayPreview } from "../assets/img/
// import 'font-awesome/css/font-awesome.min.css';



export function StayPreview({stay}) {

    
    
    return (
        <div className="stay-card">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            <img src='https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480425/001_urftcv.jpg'></img>
            {/* <img src={require('../assets/img/'+stay.imgUrls[0])}></img> */}
            <h1>{stay.name}</h1>
        </div>
    )

}

