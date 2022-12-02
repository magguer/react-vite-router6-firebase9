// Imports React Router
import { Routes, Route } from "react-router-dom";

// Imports React
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

// FireBase Components
import RequireAuth from "./components/RequireAuth";

// Rutas
import Login from "./routes/Login";
import Home from "./routes/Home";
import UserData from "./routes/UserData";
import RegisterUser from "./routes/RegisterUser";

// Componentes
import Header from "./components/Header";

const App = () => {

  const {user} = useContext(UserContext);

  if (user === false) {
    return <p>Cargando...</p>
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/userdata"
          element={
            <RequireAuth>
              <UserData />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

export default App;
