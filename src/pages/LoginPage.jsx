import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import { Link, useNavigate } from "react-router-dom";
import service from "../assets/service/api";
import "../style/Log.css";
function LoginPage() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const value = event.currentTarget.value;
    const key = event.currentTarget.id;
    setFormData({ ...formData, [key]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await service.post("/auth/login", formData);
      console.log(response);
      if (response.status === 200) {
        storeToken(response.data.accessToken);
        await authenticateUser();
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }

  const { password, email } = formData;
  return (
    <form onSubmit={handleSubmit}>
      <div className="title-login">
        <div>Login</div>
      </div>
      <div className="input-login">
        <label htmlFor="email">Email: </label>
        <input
          className="input-box"
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </div>
      <div className="input-login">
        <label htmlFor="username">Password: </label>
        <input
          className="input-box"
          type="password"
          id="password"
          value={password}
          placeholder="Enter your password here"
          onChange={handleChange}
        />
      </div>
      <p className="error">{errorMessage}</p>
      <p>
        No account? <Link to="/login">Sign up!</Link>
      </p>
      <div className="input-login">
        <button className="input-button">Login</button>
      </div>
    </form>
  );
}

export default LoginPage;
