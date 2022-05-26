// import { StayPreview } from "../assets/img/
// import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'




export function StayPreview({ stay }) {



    return (
        <Link to={`/stay/${stay.host._id}`}> 
        <div className="stay-card">
            <img src='https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480425/001_urftcv.jpg'></img>
            {/* <img src={require('../assets/img/'+stay.imgUrls[0])}></img> */}
            <div className="stay-preiview-details location-rate">
                <li><h1>{stay.address.city}, {stay.address.country}</h1></li>
                <li><h1>{stay.reviewScores.value / 2}<span className="material-icons">star</span></h1></li>
            </div>
            <div className="stay-preiview-details propery-description">
                <li><h1>{stay.name} </h1></li>
            </div>
            <div className="stay-preiview-details propery-price">
                <li><span className="material-icons">attach_money</span><h1>{stay.price} night</h1></li>
            </div>
        </div>
         </Link>
    )

}

