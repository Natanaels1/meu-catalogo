import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../screens/Home";
import PageProduto from "../screens/Produto";

export default function NoAuthenticated() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/produto" element={<PageProduto />} />
            </Routes>
        </BrowserRouter>
    )

}