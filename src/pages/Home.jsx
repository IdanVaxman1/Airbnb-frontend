import { useEffect, useRef, useState } from "react"
import { MainFilter } from "../cmps/main-filter"


export const Home = () => {

    useEffect(() => {
        console.log('in heer')
        
    }, [])


    return (
        <article className="main-page-head" >
            <div className="home-filterr">
                <MainFilter />
            </div>
        </article>

    )
}


