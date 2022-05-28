import { useEffect, useState } from "react"


export const HomeImgCard = ({ popularStay }) => {





    return <div className="home-page-card">
        <img className="img-cover" src={popularStay.imgUrls[0]}></img>
        <h1>{popularStay.address.city}</h1>
    </div>






}