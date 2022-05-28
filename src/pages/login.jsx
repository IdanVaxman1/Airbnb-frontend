import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../store/actions/userActions.js'


export const Login = () => {
    const [credentials,setCredendials] = useState({username:'',password:''})
    const dispatch = useDispatch()

    const handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        setCredendials({ ...credentials, [field]: value })
    }

    const onLogin = (ev) =>{
        ev.preventDefault()
        dispatch(login(credentials))
    }

    return (
        <section className="center" style={{marginTop:'30px'}}>
            <h1>Login</h1>
            <p>Welcome back</p>
            <form onSubmit={onLogin}>
            <input name="username" value={credentials.username} type="text" placeholder="username" onChange={handleChange} required/>
            <input name="password" value={credentials.password} type="password" placeholder="password" onChange={handleChange} required/>
            <button>login</button>
            </form>
        </section>
    )
}


