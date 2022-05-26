import { useEffect, useState } from "react"


export const DetailsGallery = ({stay}) => {


    useEffect(() => {
        
       
        console.log('stay',stay)
        
    
    }, [])

    // { if (!stay) return (<h1>loading</h1>) }


    return <section className="gallery-grid" >
        <div className="img1">
        <img src={stay.imgUrls[0]}></img>
        </div>
        <div className="img2">
        <img src={stay.imgUrls[1]}></img>
        </div>
        <div className="img3">
        <img src={stay.imgUrls[2]}></img>
        </div>
        <div className="img4">
        <img src={stay.imgUrls[3]}></img>
        </div>
        <div className="img5">
        <img src={stay.imgUrls[4]}></img>
        </div>
        
        
    </section>
    
}