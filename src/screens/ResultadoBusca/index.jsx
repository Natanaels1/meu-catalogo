import { useEffect } from 'react';

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
                    maxWidth={!matches && "lg" }
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
                    maxWidth={!matches && "lg" }
                >

                    <Grid container spacing={2}>
                        {   
                            ProdutosSearchFiltro &&
                            ProdutosSearchFiltro.map( produto => (
                                <CardProduto key={produto.id} produto={produto} />                                
                            ))
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
                            true &&
                            <Pagination 
                                count={10} 
                                defaultPage={1} 
                                siblingCount={0} 
                                boundaryCount={1}
                                color='standard' 
                                sx={{ color: "#47A9E0", mt: 4 }} 
                                size="large"
                                onChange={(e) => console.log(e.currentTarget.textContent)}
                            />
                        }
                    </Box>
                </Container>

            </main>

            <Footer />

        </Box>
    )
}
