import { useEffect, useRef, useState } from "react"


export const Home = () => {

    useEffect(() => {
        console.log('in heer')
        document.documentElement.style.setProperty('--headerFontColor', '#fff');
    }, [])


    return (
        <article className="main-page-head" >
            hello Home
        </article>

    )
}


