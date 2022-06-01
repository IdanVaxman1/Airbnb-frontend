import { NavLink } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { openModal } from "../store/actions/userActions"
import { userService } from "../services/user.service"


export const ConfirmedResModal = (props) => {

    const dispatch = useDispatch()
    const loggedinUser = userService.getLoggedinUser()

    const toggleModal = (isLogin) => {
        dispatch(openModal(isLogin))
        closeSelf()
    }

    const closeSelf = () => {
        props.toggleModal()
    }

    const onLogout = () => {
        userService.logout()
        closeSelf()
    }

    return (<section className="res-confirmed-modal">
        <img src={props.reservation.stay.img} alt="" />
        <div className="bottom-container">

            <h1>Your reservation at {props.reservation.host.name}'s' place is confirmed!</h1>


            <div className="dates-container">

                <div>
                    <li>
                        <h2>

                        Check in:
                        </h2>
                    </li>
                    <li>
                        <h3>

                        {props.reservation.checkIn.toISOString().split('T')[0]}
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

                            {props.reservation.checkOut.toISOString().split('T')[0]}
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
                    {props.reservation.stay.address.street}, {props.reservation.stay.address.city}, {props.reservation.stay.address.country}
                    {console.log(props.reservation.stay.address.city)}
                </h3>

            </div>
            <NavLink className='' to='/home' >
            <button className="reserve-button" >Your trips</button>
            </NavLink>

        </div>
        

    </section>


    )
}