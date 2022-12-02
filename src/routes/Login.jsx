import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  //Estilos
  const inputStyle = { margin: "5px", padding: "3px 8px" };
  const buttonStyle = { margin: "5px", padding: "3px 8px" };

  //useStates
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useContext
  const { loginEmailUser } = useContext(UserContext);

  // Navigate
  const navigate = useNavigate();

  //Funciones
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginEmailUser(email, password);
      navigate('/userdata')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login de Usuarios</h1>
      <form style={{ display: "grid", margin: "0 auto", width:"300px" }} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Inserte contraseña"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" style={buttonStyle}>
          Acceder
        </button>
        <NavLink style={{ textAlign: "center" }} to='/register'>Aun no tienes usuario? Registrate.</NavLink>
      </form>
    </>
  );
};

export default Login;
