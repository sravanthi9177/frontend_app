import { Link } from "react-router-dom"


function Login(){
    return (
        <div>
            <h2>Login Page</h2>
            <p><input type="email" placeholder="Email" /></p>
            <p><input type="password" placeholder="Password" /></p>
           <p><button>Login</button></p>
           <p><Link to="/register">New User ? Register here</Link></p>
        </div>
    );
}

export default Login