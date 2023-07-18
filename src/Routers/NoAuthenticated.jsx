import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../screens/Home";
import PageProduto from "../screens/Produto";
import Carrinho from "../screens/Carrinho";
import ScrollToTop from "../components/ScrollToTop";
import ResultadoBusca from "../screens/ResultadoBusca";

export default function NoAuthenticated() {
    return (
        <BrowserRouter>

            <ScrollToTop />

            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/produto/:idProduto" element={<PageProduto />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/resultado-busca/:busca" element={<ResultadoBusca />} />
            </Routes>
        </BrowserRouter>
    )

}