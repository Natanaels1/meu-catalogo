import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../screens/Home";
import PageProduto from "../screens/Produto";
import Carrinho from "../screens/Carrinho";

export default function NoAuthenticated() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/produto/:idProduto" element={<PageProduto />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )

}