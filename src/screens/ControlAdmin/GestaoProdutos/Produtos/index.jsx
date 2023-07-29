import { useState, useEffect } from "react";

import {
    Box,
    Button,
    Container,
    Grid,
    Snackbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useMediaQuery
} from "@mui/material";
import Paper from '@mui/material/Paper';

import NavBar from '../../../../components/NavBar';
import Footer from '../../../../components/Footer';

import { 
    formatBoolean, 
    formatDataTela, 
    formatMoeda 
} from "../../../../utils/formatters";

export default function GestaoProdutos() {

    const matches = useMediaQuery('(max-width:600px)');

    const TOKEN = localStorage.getItem('TOKEN_MEU_CATALOGO');
    const idEmpresaAdmin = localStorage.getItem('ID_EMPRESA');
    const url = 'http://127.0.0.1:3200/produtos/' + idEmpresaAdmin;

    const [data, setData] = useState([]);
    const [notif, setNotif] = useState({
        open: false,
        mensagem: ""
    });

    async function handleProdutosEmpresa() {

        const config = {
            method: 'GET',
            headers: { "Authorization": `Bearer ${TOKEN}` },
        };

        await fetch(url, config)
            .then(res => res.json())
            .then(json => setData(json.result))
            .catch(err =>
                setNotif({
                    open: true,
                    mensagem: err
                })
            );

    }

    useEffect(() => {
        handleProdutosEmpresa();
    }, []);

    return (
        <Box sx={{ mt: 10 }}>

            <NavBar tela="gestao-produtos" />

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

            <main>

                <Container
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        mt: 15,
                        mb: 2
                    }}
                    maxWidth={!matches && "lg"}
                >

                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            mb: 2
                        }}
                    >
                        Produtos cadastrados
                    </Typography>
                </Container>

                <Container
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        mt: 2,
                        mb: 2
                    }}
                    maxWidth={!matches && "lg"}
                >
                    <Box>
                        <Button
                            variant="contained"
                        >
                            Cadastrar novo produto
                        </Button>
                    </Box>
                </Container>

                <Container
                    sx={{ pt: 4, pb: 8, height: '100%' }}
                    maxWidth={!matches && "lg"}
                >

                    {
                        data.length > 0 &&
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, minHeight: 400 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nome</TableCell>
                                        <TableCell align="right">Categoria</TableCell>
                                        <TableCell align="right">Valor</TableCell>
                                        <TableCell align="right">Descrição</TableCell>
                                        <TableCell align="right">Pronta entrega</TableCell>
                                        <TableCell align="right">Qntd. Disponivel</TableCell>
                                        <TableCell align="right">Destacado</TableCell>
                                        <TableCell align="right">Data cadastro</TableCell>
                                        <TableCell align="right">Ativo</TableCell>
                                        <TableCell align="right">Ações</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{row.nmProduto}</TableCell>
                                            <TableCell align="center">{row.categoria}</TableCell>
                                            <TableCell align="center">{formatMoeda(row.vlProduto)}</TableCell>
                                            <TableCell align="center">{row.descricao}</TableCell>
                                            <TableCell align="center">{formatBoolean(row.prontaEntrega)}</TableCell>
                                            <TableCell align="center">{row.produtosDisponiveis}</TableCell>
                                            <TableCell align="center">{formatBoolean(row.produtoDestaque)}</TableCell>
                                            <TableCell align="center">{formatDataTela(row.dtCadastroProduto)}</TableCell>
                                            <TableCell align="center">{formatBoolean(row.produtoAtivo)}</TableCell>
                                            <TableCell align="center">
                                                <Button variant="outlined">Ações</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }

                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {/* {
                        false &&
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
                    } */}
                    </Box>
                </Container>

            </main>

            <Footer />

        </Box>
    )

}