// import { useEffect, useState } from 'react';

import { 
    Typography, 
    FormControl, 
    MenuItem, 
    Select, 
    InputLabel, 
    TextField, 
    Button, 
    IconButton, 
    Container, 
    Box 
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { Carousel } from 'react-responsive-carousel';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function PageProduto() {

    const matches = useMediaQuery('(max-width:600px)');

    const dadosProduto = {
        id: 4,
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
    };

    return (

        <Box sx={{ mt: 12 }}>

            <NavBar />

            <main style={{ minHeight: '100vh' }}>

                <Container
                    sx={{ display: "flex", width: '100%', height: '100%', gap: 2, mb: 2, mt: 15, flexDirection: matches ? 'column' : 'row'}}
                    maxWidth={!matches && "lg"}
                >

                    <Box sx={{ width: matches ? '100%' : '65%', height: !matches ? 650 : 400, overflow: 'inherit', borderRadius: 2, pt: 4 }}> 
                        <Carousel 
                            showThumbs={true} 
                            showIndicators={true} 
                            showStatus={false} 
                            showArrows={true}
                            transitionTime={500}
                        > 
                            {
                                dadosProduto.imgsProduto.map( img => (
                                    <div key={img}>
                                        <img src={img} style={{ width: '60%' }}/>
                                    </div>

                                ))
                            }
                        </Carousel>
                    </Box>

                    <Box sx={{ width: matches ? '100%' : '35%', minHeight: 450, height: 'auto', backgroundColor: '#f3f3f3', borderRadius: 2, padding: 3}}> 

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h5" component="h2">
                                {dadosProduto.nmProduto}
                            </Typography>

                            {/* <IconButton title='Adicionar aos favoritos'>
                                <FavoriteBorderIcon sx={{ fontSize: 30 }} />
                            </IconButton> */}
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <Typography variant="p" component="p" sx={{ mt: 4 }}>
                                Informe a quantidade
                            </Typography>

                            <FormControl fullWidth sx={{ mt: 1 }}>
                                <InputLabel id="demo-simple-select-label">Quantidade</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={null}
                                    label="Quantidade"
                                    onChange={null}
                                    size="medium"
                                    sx={{
                                        alignItems: 'center',
                                    }}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>

                            <Typography variant="p" component="p" sx={{ mt: 4 }}>
                                Gostaria de alguma personalização?
                            </Typography>

                            <TextField
                                id="outlined-multiline-flexible"
                                label="Descreva"
                                multiline
                                maxRows={6}
                                sx={{ mt: 1, width: '100%', fontSize: '14px' }}
                            />

                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="p" component="p" sx={{ mt: 4 }}>
                                    Valor
                                </Typography>
                                <Typography variant="p" component="p" fontWeight="bold" fontSize="22px" sx={{ mt: 4, color: '#47A9E0' }}>
                                    R$ {dadosProduto.vlProduto.toLocaleString('BRL')}
                                </Typography>
                            </Box>

                            <Button variant="contained" startIcon={<ShoppingCartCheckoutIcon />} sx={{ width: '100%', bottom: 0, mt: 2, bgcolor: '#42BB73', '&:hover': {
                                bgcolor: '#43BB90'
                            }, }}>
                                Comprar este produto
                            </Button>

                        </Box>
                        
                    </Box>

                </Container>

                <Container
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        mt: 2,
                        mb: 10,
                    }}
                    maxWidth={!matches && "lg"}
                >
                    <Box sx={{ width: '100%', minHeight: 300, backgroundColor: '#f3f3f3', borderRadius: 2, padding: 2, flexDirection: 'column'}}>
                        <Typography>
                            {dadosProduto.descricao}
                        </Typography>
                    </Box>
                </Container>

            </main>

            <Container
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mt: 4,
                    mb: 4
                }}
                maxWidth={!matches && "lg" }
            >   
                {
                    true &&
                    <Box>
                        <Typography variant="h5" component="h2">
                            Produtos similares
                        </Typography>
                    </Box>
                }
            </Container>

            <Container
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 2,
                    mb: 10,
                }}
                maxWidth={!matches && "lg"}
            >
                {
                    true &&
                    <Box sx={{ width: '100%', height: 200, backgroundColor: '#f3f3f3', borderRadius: 2, padding: 2, flexDirection: 'column', overflow: 'clip'}}>
                        
                    </Box>
                }
            </Container>

            <Footer />

        </Box>
    )
}