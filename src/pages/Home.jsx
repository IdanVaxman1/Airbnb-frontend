import { useEffect, useRef, useState } from "react"
import { MainFilter } from "../cmps/main-filter"


export const Home = () => {

    useEffect(() => {
        console.log('in heer')
        document.documentElement.style.setProperty('--headerFontColor', '#fff');
    }, [])


    return (
        <article className="main-page-head" >
            <MainFilter/>
        </article>

    )
}


