import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/auth/operations.js";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      await dispatch(login(credentials));
      history.push("/contacts"); 
    } catch (error) {
      setError("Invalid email or password");
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLogin} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;