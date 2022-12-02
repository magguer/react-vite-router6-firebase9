// Imports React
import { Routes, Route } from "react-router-dom";

// Rutas
import Login from "./routes/Login";
import Home from "./routes/Home";
import UserData from "./routes/UserData";

// Componentes
import Header from "./components/Header";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdata" element={<RequireAuth><UserData /></RequireAuth>}
        />
      </Routes>
    </>
  );
};

export default App;
