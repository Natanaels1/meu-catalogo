// import { useEffect, useState } from 'react';

import {
    Typography,
    Button,
    Container,
    Box
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import ItemCarrinho from "../../components/ItemCarrinho";

export default function Carrinho() {

    const matches = useMediaQuery('(max-width:600px)');

    const produtosSelecionados = [
        {
            id: 0,
            tipo: 'Caneca',
            nmProduto: 'Caneca mensagem biblica',
            img: 'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
            descricao: 'Caneca 350ml, personalizavel, pode colocar no microondas',
            vlProduto: 22.49,
            prontaEntrega: false,
            imgsProduto: [
                'https://i.pinimg.com/originals/c7/ac/a3/c7aca31c5cdc084e9fe435035f05e65d.jpg',
                'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
                'https://cdn.dooca.store/891/products/jecucdpd0ltmiwzwniixtczp5ncmttt5ftvn_640x640+fill_ffffff.png?v=1599143405&webp=0'
            ]
        },
        {
            id: 1,
            tipo: 'Caneca',
            nmProduto: 'Caneca mensagem biblica',
            img: 'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
            descricao: 'Caneca 350ml, personalizavel, pode colocar no microondas',
            vlProduto: 22.49,
            prontaEntrega: false,
            imgsProduto: [
                'https://i.pinimg.com/originals/c7/ac/a3/c7aca31c5cdc084e9fe435035f05e65d.jpg',
                'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
                'https://cdn.dooca.store/891/products/jecucdpd0ltmiwzwniixtczp5ncmttt5ftvn_640x640+fill_ffffff.png?v=1599143405&webp=0'
            ]
        },
        {
            id: 0,
            tipo: 'Caneca',
            nmProduto: 'Caneca mensagem biblica',
            img: 'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
            descricao: 'Caneca 350ml, personalizavel, pode colocar no microondas',
            vlProduto: 22.49,
            prontaEntrega: false,
            imgsProduto: [
                'https://i.pinimg.com/originals/c7/ac/a3/c7aca31c5cdc084e9fe435035f05e65d.jpg',
                'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
                'https://cdn.dooca.store/891/products/jecucdpd0ltmiwzwniixtczp5ncmttt5ftvn_640x640+fill_ffffff.png?v=1599143405&webp=0'
            ]
        },
        {
            id: 1,
            tipo: 'Caneca',
            nmProduto: 'Caneca mensagem biblica',
            img: 'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
            descricao: 'Caneca 350ml, personalizavel, pode colocar no microondas',
            vlProduto: 22.49,
            prontaEntrega: false,
            imgsProduto: [
                'https://i.pinimg.com/originals/c7/ac/a3/c7aca31c5cdc084e9fe435035f05e65d.jpg',
                'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
                'https://cdn.dooca.store/891/products/jecucdpd0ltmiwzwniixtczp5ncmttt5ftvn_640x640+fill_ffffff.png?v=1599143405&webp=0'
            ]
        },
        {
            id: 0,
            tipo: 'Caneca',
            nmProduto: 'Caneca mensagem biblica',
            img: 'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
            descricao: 'Caneca 350ml, personalizavel, pode colocar no microondas',
            vlProduto: 22.49,
            prontaEntrega: false,
            imgsProduto: [
                'https://i.pinimg.com/originals/c7/ac/a3/c7aca31c5cdc084e9fe435035f05e65d.jpg',
                'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
                'https://cdn.dooca.store/891/products/jecucdpd0ltmiwzwniixtczp5ncmttt5ftvn_640x640+fill_ffffff.png?v=1599143405&webp=0'
            ]
        },
        {
            id: 1,
            tipo: 'Caneca',
            nmProduto: 'Caneca mensagem biblica',
            img: 'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
            descricao: 'Caneca 350ml, personalizavel, pode colocar no microondas',
            vlProduto: 22.49,
            prontaEntrega: false,
            imgsProduto: [
                'https://i.pinimg.com/originals/c7/ac/a3/c7aca31c5cdc084e9fe435035f05e65d.jpg',
                'https://img.elo7.com.br/product/original/3B1D793/caneca-personalizavel-com-frase-biblica-325ml-caneca-catolica.jpg',
                'https://cdn.dooca.store/891/products/jecucdpd0ltmiwzwniixtczp5ncmttt5ftvn_640x640+fill_ffffff.png?v=1599143405&webp=0'
            ]
        }
    ];

    const somaVlProduto = produtosSelecionados.reduce((acumulador, produto) => {
        return acumulador + produto.vlProduto;
    }, 0);

    function finalizaPedido() {

        const numero = "5579998024140";

        let mensagem = produtosSelecionados.map( produto => {

            return `
                Nome do produto: ${produto.nmProduto}
                Tipo do produto: ${produto.tipo}
                valor: R$ ${produto.vlProduto}
            `;

        }); 

        mensagem = encodeURIComponent(mensagem);

        const link = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + mensagem;

        window.open(link);
    }

    return (

        <Box sx={{ mt: 12 }}>

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
                                produtosSelecionados.map(produto => (
                                    <ItemCarrinho key={produto.nmProduto} produto={produto} />
                                ))
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
                                    {produtosSelecionados.length}
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="p" component="p" sx={{ mt: 2 }}>
                                    Valor
                                </Typography>
                                <Typography variant="p" component="p" fontWeight="bold" fontSize="22px" sx={{ mt: 2, color: '#47A9E0' }}>
                                    R$ {somaVlProduto}
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