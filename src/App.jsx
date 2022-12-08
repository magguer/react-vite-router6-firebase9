// Imports React Router
import { Routes, Route } from "react-router-dom";

// Imports React
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

// FireBase Components
import RequireAuth from "./context/RequireAuth";

// Rutas
import Login from "./routes/Login";
import Home from "./routes/Home";
import UserData from "./routes/UserData";
import RegisterUser from "./routes/RegisterUser";

// Componentes
import Header from "./components/Header";
import LayoutContainerForm from "./components/Forms/LayoutContainerForm";

const App = () => {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
        </Route>

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
