import React from 'react' 
import {Link} from 'react-router-dom'


const NavBar = () => {

return (
  
    <nav>
    <div>logo</div>
    <div>links
    <Link to="/">HOME</Link>
    <Link to="/login">LOGIN</Link>
    <Link to="/createaccount">SIGN UP</Link>

    </div>
    </nav>
   
)


}

export default NavBar; 