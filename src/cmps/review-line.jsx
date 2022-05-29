import { useEffect, useState } from "react"


export const ReviewLine = ({ review }) => {
    useEffect(() => {
    }, [])

    return <section>
        <div className="review-line-card">
            <div className="header">
                <img src={review.by.imgUrl} ></img>
                <div className="aside">
                    <div className="name">
                        <h1>{review.by.fullname}</h1>
                    </div>
                    <div className="at">
                        <h1>{review.at.slice(0,10)}</h1>
                    </div>
                </div>
            </div>
            <p className="content">
                {review.txt}
            </p>
        </div>

    </section>

}