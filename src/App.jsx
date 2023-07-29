import { useEffect } from "react";

import Router from "./Routers";

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useStoreCarrinho } from "./stores/carrinho.store";
import { useAuthStore } from "./stores/auth.store";

export default function App() {

    const defaultTheme = createTheme();

    const { getProdutosCarrinhoToLocalStorage } = useStoreCarrinho();
    const { getDadosEmpresa } = useAuthStore();

    useEffect(() => {
        getDadosEmpresa();
        getProdutosCarrinhoToLocalStorage();
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Router />
        </ThemeProvider>
    )
}
