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
<p>This is an error!</p>
<span>Would you like an account? <Link to="/createaccount">Sign Up Here</Link></span>
</form>



</>
)



}

export default Login; 
