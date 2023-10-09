import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaInicial from "../Pages/TelaInicial/TelaInicial";
import Erro from "../Pages/Erro/Erro";
import Cadastro from "../Pages/Cadastro/Cadastro";
import CadastroEmpresa from "../Pages/CadastroEmpresa/CadastroEmpresa";
import Login from "../Pages/Login/Login";
import RefSenha from "../Pages/RefSenha/RefSenha";
import PrincipalUsuario from "../Pages/PrincipalUsuario/PrincipalUsuario";
import PrincipalProprietario from "../Pages/PrincipalProprietario/PrincipalProprietario";
import Like from "../Pages/Like/Like";
import Fotos from "../Pages/Fotos/Fotos";
import NovaSenha from "../Pages/NovaSenha/NovaSenha";

function Rotas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<TelaInicial />}/>
                <Route path="cadastro" element={<Cadastro />}/>
                <Route path="cadastroEmpresa" element={<CadastroEmpresa />}/>
                <Route path="login" element={<Login />}/>
                <Route path="refSenha" element={<RefSenha/>}/>
                <Route path="novasenha" element={<NovaSenha />}/>
                <Route path="principalusuario" element={<PrincipalUsuario />}/>
                <Route path="principalempresa" element={<PrincipalProprietario />}/>
                <Route path="telainicial" element={<TelaInicial />}/>
                <Route path="goToLike" element={<Like />}/>
                <Route path="goToFotos" element={<Fotos />}/>
            </Routes>
        </BrowserRouter>
  
    );
  }
  
  export default Rotas;