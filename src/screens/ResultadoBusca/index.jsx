import { useEffect, useState } from 'react';

import { Container, Box, Grid, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import CardProduto from '../../components/CardProduto';
import { Pagination } from '@mui/material';

import { useStoreProdutosDisponiveis } from '../../stores/produtosDisponiveis.store';
import { useParams } from 'react-router-dom';
import Filtros from '../../components/Filtros';

export default function ResultadoBusca() {

    const matches = useMediaQuery('(max-width:600px)');
    const { pesquisa } = useParams();

    const {
        ProdutosSearchFiltro,
        searchProdutosTelaBusca
    } = useStoreProdutosDisponiveis();

    useEffect(() => {
        searchProdutosTelaBusca(pesquisa);
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 8;
    const totalPages = Math.ceil(ProdutosSearchFiltro.length / ITEMS_PER_PAGE);

    function renderItems() {

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        return ProdutosSearchFiltro.slice(startIndex, endIndex).map( produto => (
            <CardProduto key={produto.id} produto={produto} />
        ))
    }

    function handlePageChange(event, newPage) {
        setCurrentPage(newPage);
    }

    return (

        <Box sx={{ mt: 10 }}>

            <NavBar tela="resultado-busca" />

            <main>

                <Box
                    sx={{
                        mt: 15,
                        mb: 2,
                        width: '100%',
                        height: 'auto',
                        bgcolor: '#f3f3f3',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: 1
                    }}
                >
                    <Filtros />
                </Box>

                <Container
                    sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mt: 6,
                        mb: 2
                    }}
                    maxWidth={!matches && "lg"}
                >
                    <Typography
                        variant='p'
                        component="p"
                    >
                        Encontrados
                    </Typography>
                    <Typography
                        variant='h6'
                        fontWeight="bold"
                        fontSize={20}
                        sx={{
                            color: '#47A9E0'
                        }}
                    >
                        {ProdutosSearchFiltro.length}
                    </Typography>
                </Container>

                <Container
                    sx={{ pt: 4, pb: 8 }}
                    maxWidth={!matches && "lg"}
                >

                    <Grid container spacing={2}>
                        {
                            ProdutosSearchFiltro ?       
                                renderItems()
                                :
                                <>Nenhum produto encontrado</>
                        }
                    </Grid>

                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {
                            ProdutosSearchFiltro.length > 0 &&
                            <Pagination
                                count={totalPages}
                                defaultPage={currentPage}
                                siblingCount={0}
                                boundaryCount={1}
                                color='standard'
                                sx={{ color: "#47A9E0", mt: 4 }}
                                size="large"
                                onChange={handlePageChange}
                            />
                        }
                    </Box>

                </Container>

            </main>

            <Footer />

        </Box>
    )
}
