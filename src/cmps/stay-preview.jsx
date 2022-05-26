// import { StayPreview } from "../assets/img/
// import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'




export function StayPreview({stay}) {

    
    
    return (
        <Link to={`/stay/${stay.host._id}`}> 
        <div className="stay-card">
            <i className="fa-solid fa-arrow-left"></i>
            <i className="fa-solid fa-arrow-right"></i>
            <img src='https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480425/001_urftcv.jpg'></img>
            {/* <img src={require('../assets/img/'+stay.imgUrls[0])}></img> */}
            <h1>{stay.name}</h1>
        </div>
         </Link>
    )

}

