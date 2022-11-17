import React from 'react' 
import {Link} from 'react-router-dom'


const NavBar = () => {

return (
  
    <nav>
    <div>logo</div>
    <div>links
    <Link to="/?cat=homepage">HOME</Link>
    <Link to="/?cat=login">LOGIN</Link>
    <Link to="/?cat=register">SIGN UP</Link>

    </div>
    </nav>
   
)


}

export default NavBar; 