import Routes from "./Routers";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useStoreCarrinho } from "./stores/carrinho.store";
import { useEffect } from "react";

export default function App() {

    const defaultTheme = createTheme();

    const { getProdutosCarrinhoToLocalStorage } = useStoreCarrinho();

    useEffect(() => {
        getProdutosCarrinhoToLocalStorage();
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Routes />
        </ThemeProvider>
    )
}
