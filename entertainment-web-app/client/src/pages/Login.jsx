import { Link } from "react-router-dom";

const Login = () => {
  return (
  <main>
    <p>logo</p>
  <form>
        <input type="text" />
        <input type="text" />
        <button>Login to your account</button>
        <p>Don't have an account? <Link to="signup">Sign up</Link></p>
  </form>
  </main>
  )
}

export default Login;
