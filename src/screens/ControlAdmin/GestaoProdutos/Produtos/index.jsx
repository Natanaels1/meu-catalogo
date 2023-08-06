import { useState, useEffect } from "react";

import {
    Box,
    Button,
    Checkbox,
    Collapse,
    Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    IconButton,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    Snackbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import Paper from '@mui/material/Paper';

import NavBar from '../../../../components/NavBar';
import Footer from '../../../../components/Footer';

import {
    formatBoolean,
    formatDataTela,
    formatMoeda
} from "../../../../utils/formatters";
import { CloseRounded } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useForm } from "react-hook-form";

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
    const [openModal, setOpenModal] = useState(false);
    const [openRow, setOpenRow] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            categoria: "selecione"
        }
    });

    async function handleProdutosEmpresa() {

        const config = {
            method: 'GET',
            headers: { "Authorization": `Bearer ${TOKEN}` },
        };

        await fetch(url, config)
            .then(res => res.json())
            .then(json => {
                setData(json.result);
                console.log(json.result)
            })
            .catch(err =>
                setNotif({
                    open: true,
                    mensagem: err
                })
            );

    }

    async function handleCategorias() {
        const config = {
            method: 'GET',
            headers: { "Authorization": `Bearer ${TOKEN}` },
        };

        await fetch('http://127.0.0.1:3200/categorias/' + idEmpresaAdmin, config)
            .then(res => res.json())
            .then(json => setCategorias(json.result))
            .catch(err =>
                setNotif({
                    open: true,
                    mensagem: err
                })
            );
    }

    useEffect(() => {
        handleProdutosEmpresa();
        handleCategorias();
    }, []);

    function salvarProduto(data) {

        const formData = new FormData();

        const imgs = data.imgsProduto;

        for (const i in imgs) {
            if(typeof imgs[i] === 'object') {
                formData.append('files', imgs[i]);
            }
        }

        delete data.imgsProduto;
        delete data.categoria;
        data.idEmpresa = Number(idEmpresaAdmin);
        data.prontaEntrega = Number(data.produtosDisponiveis) > 0 ? true : false;
        data.produtosDisponiveis = Number(data.produtosDisponiveis);
        data.vlProduto = parseFloat(Number(data.vlProduto));

        formData.append('body', JSON.stringify(data));

        reqNovoProduto(formData);
    }

    async function reqNovoProduto(formData) {

        setLoading(true);

        const config = {
            method: 'POST',
            headers: { "Authorization": `Bearer ${TOKEN}` },
            redirect: "follow",
            body: formData,
        };

        await fetch('http://127.0.0.1:3200/produto', config)
            .then(res => res.json())
            .then(json => {
                setLoading(false);
                setOpenModal(false);
                handleProdutosEmpresa();
                setNotif({
                    open: true,
                    mensagem: json.result.message
                });
                reset();
            })
            .catch(err => {
                setLoading(false);
                setNotif({
                    open: true,
                    mensagem: err
                });
            });
    }

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
                            onClick={() => setOpenModal(true)}
                        >
                            Cadastrar novo produto
                        </Button>
                    </Box>
                </Container>

                <Container
                    sx={{ pt: 4, pb: 8, height: '100%' }}
                    maxWidth={!matches && "lg"}
                >

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650, minHeight: 400 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <IconButton
                                            aria-label="expand row"
                                            size="small"
                                            onClick={() => setOpenRow(true)}
                                        >
                                            {openRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
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
                                        <TableCell>
                                            <Collapse in={openRow} timeout="auto" unmountOnExit>
                                                teste
                                            </Collapse>
                                        </TableCell>
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

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Box
                    sx={{
                        bgcolor: '#fff',
                        minWidth: '600px',
                        minHeight: '400px',
                        padding: 2,
                        borderRadius: 2,
                        width: 'auto',
                        height: 'auto',
                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // height: '20px',
                            marginBottom: '25px',
                            margin: '0 20px 20px',
                            // backgroundColor: 'green'
                        }}
                    >
                        <Typography variant="h6" component="p" >
                            Cadastro novo produto
                        </Typography>
                        <IconButton onClick={() => setOpenModal(false)}>
                            <CloseRounded sx={{ fontSize: 28 }} />
                        </IconButton>
                    </Box>

                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            width: '100%',
                            padding: 0
                        }}
                    >
                        <form
                            onSubmit={handleSubmit(salvarProduto)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10,
                                width: '100%',
                                padding: 0
                            }}
                        >
                            <FormGroup>
                                <TextField
                                    id="outlined-basic"
                                    label="Nome"
                                    variant="outlined"
                                    size="small"
                                    {...register("nmProduto", { required: true })}
                                    sx={{
                                        marginBottom: 1
                                    }}
                                />
                                {errors.nmProduto && <span style={{ color: "red" }}>Informe o nome do produto</span>}
                            </FormGroup>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2
                                }}
                            >
                                <FormControl
                                    fullWidth
                                    sx={{
                                        paddingBottom: 1
                                    }}
                                >
                                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Categoria"
                                        size="small"
                                        {...register("idCategoria", { required: true, validate: (value) => value !== "selecione" })}
                                        sx={{
                                            marginBottom: 1,
                                            alignItems: "center"
                                        }}
                                    >
                                        <MenuItem value="selecione" >Selecione</MenuItem>
                                        {
                                            categorias.map(categoria => (<MenuItem value={categoria.idCategoria} key={categoria.idCategoria} >{categoria.nmCategoria}</MenuItem>))
                                        }
                                    </Select>
                                    {errors.idCategoria && <span style={{ color: "red" }}>Informe a categoria do produto</span>}
                                </FormControl>
                                <FormGroup>
                                    <TextField
                                        id="outlined-basic"
                                        label="Valor"
                                        variant="outlined"
                                        size="small"
                                        {...register("vlProduto", { required: true })}
                                        sx={{
                                            marginBottom: 1
                                        }}
                                    />
                                    {errors.vlProduto && <span style={{ color: "red" }}>Qual valor do produto?</span>}
                                </FormGroup>
                            </Box>

                            <FormGroup>
                                <TextField
                                    id="outlined-basic"
                                    label="Descrição"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    {...register("descricao", { required: true })}
                                    sx={{
                                        marginBottom: 1
                                    }}
                                />
                                {errors.descricao && <span style={{ color: "red" }}>Descreva o produto</span>}
                            </FormGroup>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    justifyContent: 'space-between',
                                }}
                            >
                                <FormGroup>
                                    <TextField
                                        id="outlined-basic"
                                        label="Quantidade disponivel"
                                        variant="outlined"
                                        size="small"
                                        type="number"
                                        {...register("produtosDisponiveis", { required: true })}
                                        sx={{
                                            marginBottom: 1
                                        }}
                                    />
                                    {errors.produtosDisponiveis && <span style={{ color: "red" }}>Informe a quantidade disponivel</span>}
                                </FormGroup>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox size="medium" {...register("produtoDestaque")} />} label="Produto destaque?" />
                                </FormGroup>
                            </Box>

                            <FormGroup>
                                <FormLabel
                                    sx={{
                                        marginBottom: 1
                                    }}
                                >
                                    Imagens do produto
                                </FormLabel>
                                <input
                                    id="outlined-basic-up"
                                    {...register("imgsProduto", { required: true })}
                                    style={{
                                        marginBottom: 1
                                    }}
                                    type="file"
                                    accept="image/*"
                                    multiple
                                />
                                {errors.imgsProduto && <span style={{ color: "red" }}>Adicione no minimo uma imagem</span>}
                            </FormGroup>

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    // alignItems: 'center',
                                    // height: '20px',
                                    // marginTop: '25px',
                                    padding: '10px 0',
                                    gap: 2
                                }}
                            >
                                <Button
                                    variant="outlined"
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={loading}
                                >
                                    Salvar
                                </Button>
                            </Box>
                        </form>
                    </Container>
                </Box>
            </Modal>

        </Box>
    )

}