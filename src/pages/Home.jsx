import { useEffect, useRef, useState } from "react"
import { MainFilter } from "../cmps/main-filter"


export const Home = () => {

    useEffect(() => {
        document.documentElement.style.setProperty('--headerbackgroundColor', 'unset');
        document.documentElement.style.setProperty('--headerFontColor', '#fff');
        
    }, [])


    return (
        <article className="main-page-head" >
            <div className="home-filterr">
                <MainFilter />
            </div>
        </article>

    )
}


