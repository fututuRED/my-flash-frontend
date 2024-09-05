import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../assets/service/api";
import "../style/SignUp.css";
function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
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
      const response = await service.post("/auth/signup", formData);
      console.log(response);
      if (response.status === 201) {
        setTimeout(() => {
          navigate("/login");
        }, 200);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }

  const { username, password, email } = formData;
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <div className="title-sign">
        <div>SignUp</div>
      </div>
      <div className="input-sign">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Enter Username"
          onChange={handleChange}
        />
      </div>
      <div className="input-sign">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </div>
      <div className="input-sign">
        <label htmlFor="username">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </div>

      <p className="error">{errorMessage}</p>

      <p>
        Already have an account? <Link to={"/login"}>Login.</Link>
      </p>
      <button className="sign-button">Signup</button>
    </form>
  );
}

export default SignUpPage;
