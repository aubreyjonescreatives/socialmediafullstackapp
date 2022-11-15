import React from 'react' 
import {Link} from 'react-router-dom'


const NavBar = () => {

return (
    <>
    <div>logo</div>
    <div>links
    <Link to="/?cat=home">HOME</Link>
    <Link to="/?cat=login">LOGIN</Link>
    <Link to="/?cat=register">SIGN UP</Link>

    </div>
    </>
)


}

export default NavBar; 