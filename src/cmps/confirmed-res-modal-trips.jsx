import { NavLink } from "react-router-dom"
import { useDispatch, dispatch } from 'react-redux'
import { openModal } from "../store/actions/userActions"
import { userService } from "../services/user.service"
import { ReservationConfirmed } from "../store/actions/reservation.action"
import { utilService } from "../services/util.service"
import { useState } from "react"


export const ConfirmedResModalTrips = (props) => {

    const dispatch = useDispatch()

    const [modalStyling, setShowmodalStyling] = useState ({display: 'block'})


    

    const dispatchReservation = () => {
        dispatch(ReservationConfirmed(null))
    }


    const loggedinUser = userService.getLoggedinUser()

    const toggleModal = (isLogin) => {
        dispatch(openModal(isLogin))
        closeSelf()
    }

    const closeSelf = () => {
        props.toggleModal()
    }

    const closeModal = () => {
        console.log('close modal')
        setShowmodalStyling({display: 'none'})
        props.toggleModalIsOpen()
        dispatchReservation()
    }

    const onLogout = () => {
        userService.logout()
        closeSelf()
    }

    {if (!props.reservation) return <h1>loading...</h1>}

    return (<>
    <div style={modalStyling} className='modal-blur' onClick={closeModal}></div>
    <section style={modalStyling}  className="res-confirmed-modal">
        
        <img src={props.reservation.stay.img} alt="" />
        <span onClick={closeModal} className="material-icons clickable close-modal">close</span>
        <div className="bottom-container">

            <h1>Your reservation at {props.reservation.hostName}'s' place is confirmed!</h1>


            <div className="dates-container">

                <div>
                    <li>
                        <h2>

                        Check in:
                        </h2>
                    </li>
                    <li>
                        <h3>
                        {props.reservation.checkIn.substring(0, 10)}
                        </h3>
                    </li>
                </div>
                <span>
                    |
                </span>
                <div>
                    <div>
                        <li>
                            <h2>

                            Check out:
                            </h2>
                        </li>
                        <li>
                            <h3>
                            {props.reservation.checkOut.substring(0, 10)}
                            </h3>
                        </li>
                    </div>
                </div>
            </div>

            <div className="guests">
                <h2>Who's coming</h2>
                <h3>
                    {props.reservation.adults != 0 && <h3>Adults: {props.reservation.adults}</h3>}
                </h3>
                <h3>
                    {props.reservation.childrens != 0 && <h3>Childrens: {props.reservation.childrens}</h3>}
                </h3>
            </div>

            <div className="address">
                <h2>
                    Address
                </h2>
                <h3>
                    {props.reservation.stay.address.street}
                </h3>
                <h2>
                    Total Price
                </h2>
                <h3>
                    ${utilService.getUsPrice(props.reservation.totalPrice)}
                </h3>

            </div>
            <NavLink className='' to='/trips' >
            <button onClick={()=>closeModal()} className="reserve-button" >Your trips</button>
            </NavLink>

        </div>
        

    </section>
    </>


    )
}