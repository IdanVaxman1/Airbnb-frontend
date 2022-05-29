import { useEffect, useRef, useState } from "react"
import { React } from "react";





export function StayDeatailsBellow({ stay }) {
    // useEffect(() => {
    //     console.log(props.stay)
    // }, [])


    { console.log(stay.host.thumbnailUrl) }
    return (
        <section className="">
            <section className="stay-details-header-below">
                <div className="below-header">
                    <h1>{stay.roomType} hosted by {stay.host.fullname} </h1>
                </div>
                <img src={stay.host.thumbnailUrl} />


            </section>
            <section>
                <h5>{stay.capacity} guest · {stay.bedrooms} bedrooms · {stay.beds} beds · {stay.bathrooms} baths </h5>
            </section>
            <div className="feature-block">
                <div className="feature-logo"><span className="material-icons">home</span></div>
                <section className="paragraph">
                    <div>
                        <h4>Entire home</h4>
                    </div>
                    <div>
                        <h5>You’ll have the apartment to yourself.</h5>
                    </div>
                </section>
            </div>
            <div className="feature-block">
                <div className="feature-logo"><span className="material-icons ">location_on</span></div>
                <section className="paragraph">
                    <div>
                        <h4>Great location</h4>
                    </div>
                    <div>
                        <h5>Recent guests gave the location a 5-star rating.</h5>
                    </div>
                </section>
            </div>
            <div className="feature-block">
                <div className="feature-logo"><span className="material-icons">auto_awesome</span></div>
                <section className="paragraph">
                    <div>
                        <h4>Enhanced Clean</h4>
                    </div>
                    <div>
                        <h5>This host has committed to our 5-step enhanced cleaning process.</h5>
                    </div>
                </section>
            </div>

            <div className="feature-block">
                <div className="feature-logo"><span className="material-icons">event</span></div>
                <section className="paragraph">
                    <div>
                        <h4>Free cancellation up to 24 hours before check-in</h4>
                    </div>
                    <div>
                        <h5>feel free to be flexible.</h5>
                    </div>
                </section>
            </div>



            <div className="stay-cover">
                <h1><span className="stay-cover-logo">stay</span>cover</h1>
                <div className="stay-cover-text">
                    <p>Every booking includes free protection from Host cancellations, listing inaccuracies,
                        and  other issues like trouble checking in.<br /> Learn more</p>
                </div>
            </div>

            <div className="stay-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non unde totam nostrum error corporis quis velit dicta sapiente vitae ut, delectus repudiandae iste sit excepturi quidem nulla odit earum facere a aperiam voluptates blanditiis,<br /> pariatur in voluptatibus! Repellat placeat quam voluptate possimus qui, error earum! Aut asperiores fugiat illum rem omnis <br />qui nam aliquid, veniam saepe quaerat accusamus porro vero, tenetur quia repellat? Nihil blanditiis nulla architecto vero quaerat unde accusamus vitae. Voluptatibus laborum odio odit omnis repellendus? Dolore,<br /> commodi! Veritatis, provident. Quasi officia tempore, temporibus, magnam recusandae optio ullam accusantium provident placeat ea laboriosam aliquam inventore non minus culpa.
                <p>Show more</p>
            </div>
        </section>

    )
}