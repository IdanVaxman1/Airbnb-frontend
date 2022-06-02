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
                <div className="feature-logo"><span class="material-icons">home</span></div>
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
                <div className="feature-logo"><span class="material-icons ">location_on</span></div>
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
                <div className="feature-logo"><span class="material-icons">auto_awesome</span></div>
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
                <div className="feature-logo"><span class="material-icons">event</span></div>
                <section className="paragraph">
                    <div>
                        <h4>Free cancellation up to 24 hours before check-in</h4>
                        </div>
                    <div>
                        <h5>feel free to be flexible.</h5>
                        </div>
                </section>
            </div>
        </section>

    )
}