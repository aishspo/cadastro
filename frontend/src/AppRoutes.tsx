import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./components/CadastroUsuario";
import Login from "./components/Login";

function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;
  