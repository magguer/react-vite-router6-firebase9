import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, signOutEmailUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUserLogout = async () => {
    try {
      await signOutEmailUser();
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };

  const navStyle = { margin: "5px" };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {user ? (
        <>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/userdata">Perfil de Ususario</NavLink>
          <button onClick={handleUserLogout}>Desconectar</button>
        </>
      ) : (
        <>
          <div style={{ display: "flex" }}>
            <div style={navStyle}>
              <NavLink to="/login">Login</NavLink>
            </div>
            <div style={navStyle}>
              <NavLink to="/register">Registro</NavLink>
            </div>
          </div>
        </>
      )}
      <h2>{user ? user.email : "Desconectado"}</h2>

    </div>
  );
};

export default Header;
