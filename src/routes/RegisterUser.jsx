// Imports React Router
import { useNavigate } from "react-router-dom";

// Imports React
import { useContext, useState } from "react";

// Imports Contexts
import { UserContext } from "../context/UserProvider";

const RegisterUser = () => {
  //Estilos
  const inputStyle = { margin: "5px", padding: "3px 8px" };
  const buttonStyle = { margin: "5px", padding: "3px 8px" };

  //useStates
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //useContext

  const { registerEmailUser } = useContext(UserContext);

    // Navigate
    const navigate = useNavigate();

  //Funciones
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerEmailUser(email, password);
      navigate("/userdata");
    } catch (error) {
      alert(error.code);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Registro de Usuarios</h1>
      <form
        style={{ display: "grid", margin: "0 auto", width: "300px" }}
        onSubmit={handleRegisterSubmit}
      >
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
        <input
          style={inputStyle}
          type="password"
          placeholder="Verifique la contraseña"
          name="passwordreply"
          id="passwordreply"
        />
        <button type="submit" style={buttonStyle}>
          Registrar Usuario
        </button>
      </form>
    </>
  );
};

export default RegisterUser;
