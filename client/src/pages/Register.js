import React from 'react' 
import { Link } from 'react-router-dom'


const Register = () => {

return (
<>

<h1>Login</h1>

<form>

<input required type="text" placeholder='username' />
<input required type="email" placeholder='email' />
<input required type="password" placeholder='password' />
<button>Login</button>
<p>This is an error!</p>
<span>Do you have an account? <Link to="/login">Login</Link></span>
</form>



</>
)



}

export default Register; 
