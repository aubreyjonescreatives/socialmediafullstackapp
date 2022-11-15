import React from 'react' 
import { Link } from 'react-router-dom'


const Login = () => {

return (
<>

<h1>Login</h1>

<form>

<input type="text" placeholder='username' />
<input type="password" placeholder='password' />
<button>Login</button>
<span>Would you like an account? <Link to="/register">Register</Link></span>
</form>



</>
)



}

export default Login; 
