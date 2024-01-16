import React, { useContext } from 'react' 

import {UserContext} from '../context/UserContext'


// import './Header.css'
const Header = ({title})=>{
    const [token,setToken] = useContext(UserContext)

    const handleLogout = () =>{
        setToken(null)
    }

    return (
        <div className="has-text-centered m-6">
            <h1 className="title">{title}</h1>
            {token && (<button className="button_log_out" onClick={handleLogout}>Logout</button>)}
        </div>
    )
}

export default Header;