import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import CardProduto from '../../components/CardProduto';
import { Pagination } from '@mui/material';
import Carousel from '../../components/CarouselHome';

import { produtos } from '../../services/dbProdutos';

export default function Home() {

    const matches = useMediaQuery('(max-width:600px)');

    const [ produtosData, setProdutosData ] = useState([]);

    const getProdutos = () => {
        setProdutosData(produtos);
        return;
    };

    useEffect(() => {
        getProdutos();
    }, []);

    return (

        <Box sx={{ mt: 10 }}>

            <NavBar />

            <main>

                <Box
                    sx={{
                        mt: 15,
                        mb: 2,
                        width: '100%',
                        bgcolor: '#f3f3f3'
                    }}
                >
                    <Carousel />
                </Box>

                <Container
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        mt: 8,
                        mb: 4
                    }}
                    maxWidth={!matches && "lg" }
                >
                    <Box>
                        <Typography variant="h4" component="h2">
                            Achadinhos surpreendentes
                        </Typography>
                        <Typography variant="h6" component="h3">
                            produtos artesanais com muita elegância
                        </Typography>
                    </Box>
                </Container>

                <Container
                    sx={{ pt: 4, pb: 8 }}
                    maxWidth={!matches && "lg" }
                >

                    <Grid container spacing={2}>
                        {   
                            produtosData &&
                            produtosData.map( produto => (
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
                        <Pagination count={10} color='secondary' sx={{ bgColor: "#47A9E0", mt: 4 }} />
                    </Box>
                </Container>

            </main>

            <Footer />

        </Box>
    )
}
