// import { StayPreview } from "../assets/img/
// import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from "react"





export function StayPreview({ stay }) {
    const [imgIdx, setImgIdx] = useState(null)

    useEffect(() => {
        const imgIdx = 0
        setImgIdx(imgIdx)


    }, [])

    var dif = 0
    const switchImg = (event, direction) => {
        event.preventDefault()
        event.stopPropagation();

        { var len = stay.imgUrls.length }
        (direction === 'up') ? dif = 1 : dif = -1
        const idx = imgIdx + dif
        { if (idx === len) idx = len }
        { if (idx < 0) idx = 0 }
        setImgIdx(idx)


    }

    return (
        <Link to={`/stay/${stay._id}`}>

            <div className="stay-card">
                <div>
                    <img src={stay.imgUrls[imgIdx]}></img>
                    <div onClick={(event) => switchImg(event, 'up')} className="right-arr">
                        <span className="material-icons">arrow_forward_ios</span>
                    </div>
                    <div onClick={(event) => switchImg(event, 'down')} className="left-arr">
                        <span className="material-icons">arrow_back_ios</span>
                    </div>
                </div>
                {/* <img src='https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480425/001_urftcv.jpg'></img> */}
                <div className="stay-preiview-details location-rate">
                    <li><h1>{stay.address.city}, {stay.address.country}</h1></li>
                    <li><h1>{stay.reviewScores.value / 2}
                        <span className="material-icons">star</span>
                    </h1></li>
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

