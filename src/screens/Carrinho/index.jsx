import { useState } from "react";

import {
    Typography,
    Button,
    Container,
    Box,
    Snackbar
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import ItemCarrinho from "../../components/ItemCarrinho";
import { useStoreCarrinho } from "../../stores/carrinho.store";

export default function Carrinho() {

    const matches = useMediaQuery('(max-width:600px)');

    const {
        Carrinho,
        removeProduto
	} = useStoreCarrinho(state => state);

    const [notif, setNotif] = useState({
        open: false,
        mensagem: ""
    });

    const somaVlProduto = Carrinho.reduce((acumulador, produto) => {
        return acumulador + produto.vlProduto;
    }, 0);

    function finalizaPedido() {

        if(Carrinho.length === 0) {
            setNotif({
                open: true,
                mensagem: "Nenhum produto no carrinho..."
            })
            return;
        }

        const numero = "557998024140";
        // const numero = "557999830201";

        let mensagem = Carrinho.map(produto => {

return `
*NOME DO PRODUTO:*
${produto.nmProduto}

*TIPO DO PRODUTO:*
${produto.tipo}

*PERSONALIZAÇÃO SOLICITADA:* 
${produto.personalizacaoCliente}

*QUANTIDADE DESTE PRODUTO:*
${produto.qntd}

*VALOR: R$ ${parseFloat(produto.vlProduto.toFixed(2))}*

----------------------------------------------
`;

        });

        const textoEditado = mensagem;

        const link = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + encodeURIComponent(textoEditado);

        window.open(link);
    }

    function altQntdProduto(id) {

        const produtoEncontrado = Carrinho.find(produto => produto.id === id);

        if (produtoEncontrado) {

            produtoEncontrado.qntd = produtoEncontrado.qntd + 1;

            // setProdutosSelecionados([])
        }
    }

    return (
        <Box sx={{ mt: 12 }}>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={notif.open}
                onClose={() => setNotif({
                    open: false,
                    mensagem: ''
                })}
                message={notif.mensagem}
                key={notif.mensagem + '1'}
                autoHideDuration={2000}
            />

            <NavBar />

            <main style={{ minHeight: '100vh' }}>

                <Container
                    sx={{ display: "flex", width: '100%', height: '100%', gap: 2, mb: 2, mt: 15, flexDirection: matches ? 'column' : 'row' }}
                    maxWidth={!matches && "lg"}
                >

                    <Box sx={{ width: matches ? '100%' : '65%', minHeight: 300, overflow: 'inherit', borderRadius: 2 }}>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h5" component="h2">
                                Seu carrinho
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {
                                    Carrinho.length > 0 ?
                                    Carrinho.map(produto => (
                                        <ItemCarrinho 
                                            key={produto.nmProduto} 
                                            produto={produto} 
                                            removeProduto={(id) => removeProduto(id)} 
                                            altQntdProduto={(id, action) => altQntdProduto(id, action)}
                                        />
                                    ))
                                    :
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 200,
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography variant="h6" color="secondary">
                                            O carrinho está vazio
                                        </Typography>
                                    </Box>
                            }
                        </Box>
                    </Box>

                    <Box sx={{ width: matches ? '100%' : '35%', height: 250, backgroundColor: '#f3f3f3', borderRadius: 2, padding: 3 }}>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h5" component="h2">
                                Resumo
                            </Typography>
                        </Box>

                        <Box sx={{ height: 100 }}>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="p" component="p" sx={{ mt: 4 }}>
                                    Quantidade de produtos
                                </Typography>

                                <Typography variant="p" component="p" sx={{ mt: 4 }} fontWeight="bold" fontSize="22px">
                                    {Carrinho.length}
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="p" component="p" sx={{ mt: 2 }}>
                                    Valor
                                </Typography>
                                <Typography variant="p" component="p" fontWeight="bold" fontSize="22px" sx={{ mt: 2, color: '#47A9E0' }}>
                                    R$ {parseFloat(somaVlProduto.toFixed(2))}
                                </Typography>
                            </Box>

                            <Button variant="contained" startIcon={<ShoppingBagIcon />} onClick={() => finalizaPedido()} sx={{
                                width: '100%', bottom: 0, mt: 2, bgcolor: '#42BB73', '&:hover': {
                                    bgcolor: '#43BB90'
                                },
                            }}>
                                Finalizar compra
                            </Button>

                        </Box>

                    </Box>

                </Container>

            </main>

            <Footer />

        </Box>
    )
}