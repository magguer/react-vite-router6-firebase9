import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickLogin = () => {
    setUser(true);
    navigate("/");
  };

  return (
    <>
      <h1>Login Noboss</h1>
      <h2>{user ? "En línea" : "Desconectado"}</h2>
      <button onClick={handleClickLogin}>Acceder</button>
    </>
  );
};

export default Login;
