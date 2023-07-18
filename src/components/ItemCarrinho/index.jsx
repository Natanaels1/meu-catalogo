import { Box, IconButton, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";

import QtdItems from "../QntItems";

export default function ItemCarrinho({ produto, removeProduto, altQntdProduto }) {

    const matches = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();

    const acaoDoFilho = (mensagemDoFilho) => {
        altQntdProduto(produto.id, '+1');
    };

    return (
        <Box
            key={produto.nmProduto}
            sx={{
                width: '100%',
                padding: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #ccc',
                flexDirection: matches ? 'column' : 'row'
            }}
        >

            <Box
                sx={{
                    width: '100%',
                    padding: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <img 
                    src={produto.imgsProduto[0]} 
                    width={50} 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => {
                        navigate('/produto/' + produto.id);
                    }} 
                />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="p" fontWeight="semibold" fontSize={18}>
                        {produto.nmProduto}
                    </Typography>

                    <Typography variant="p" fontWeight="bold" fontSize={18} sx={{ color: '#47A9E0' }}>
                        R$ {parseFloat((produto.vlProduto).toFixed(2))}
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    width: matches ? '100%' : 'auto',
                    justifyContent: matches && 'flex-end'
                }}
            >

                <QtdItems 
                    idProduto={produto.id}
                    onAcaoDoFilho={acaoDoFilho}
                    qntdItems={produto.qntd}
                />

                <IconButton onClick={() => removeProduto(produto.id)}>
                    <HighlightOffIcon color="error" />
                </IconButton>
            </Box>
        </Box>
    )

}