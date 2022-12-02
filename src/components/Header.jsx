import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Header = () => {
  const {user, setUser} = useContext(UserContext);

  return (
    <>
      {user ? (
        <>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/userdata">Perfil de Ususario</NavLink>
        <button onClick={() => setUser(false)}>Desconectar</button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </>
  );
};

export default Header;
