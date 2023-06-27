import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <main>
      <p>logo</p>
      <form>
        <input type="email" />
        <input type="password" />
        <input type="password" />
        <button>Create an account</button>
        <p>Already have an account? <Link to="login">Login</Link></p>
      </form>
    </main>
  )
}

export default Signup;
