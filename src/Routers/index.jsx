import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../screens/Home";
import PageProduto from "../screens/Produto";
import Carrinho from "../screens/Carrinho";
import ScrollToTop from "../components/ScrollToTop";
import ResultadoBusca from "../screens/ResultadoBusca";
import Termos from "../screens/TermosPrivacidade/Termos";
import Privacidade from "../screens/TermosPrivacidade/Privacidade";
import Login from "../screens/ControlAdmin/Login";
import GestaoProdutos from '../screens/ControlAdmin/GestaoProdutos/Produtos';
import { useAuthStore } from "../stores/auth.store";

export default function Router() {

    const { logged } = useAuthStore();

    const authenticated = logged;

    return (
        <BrowserRouter>

            <ScrollToTop />

            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produto/:idProduto" element={<PageProduto />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/resultado-busca/:pesquisa?" element={<ResultadoBusca />} />
                <Route path="/termos-de-uso" element={<Termos />} />
                <Route path="/politica-de-privacidade" element={<Privacidade />} />

                {
                    authenticated && 
                    <Route path="/gestao-produtos"  element={<GestaoProdutos />} />
                }
         
            </Routes>
        </BrowserRouter>
    )
    
}

