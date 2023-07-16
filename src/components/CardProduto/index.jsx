import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ProntaEntrega } from "../Tags/ProntaEntrega";
import { useNavigate } from "react-router-dom";

export default function CardProduto({produto}) {

    const navigate = useNavigate();

    const id = produto.id;
    const nomeProduto = produto.nmProduto;
    const valor = produto.vlProduto;
    const urlImg = produto.img;
    const isProntaEntrega = produto.prontaEntrega;

    return (
        <Grid 
            item 
            key={id}  
            xs={6} 
            sm={6} 
            md={3} 
            onClick={() => {
                navigate('/produto/' + id)
            }}
        >
            <Card
                key={id}
                sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 3,
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'scale(1.2)',
                        transition: '2s'
                    },
                }}
            >
                <img src={urlImg} alt={nomeProduto} />

                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography fontSize={16}>
                        {nomeProduto}
                    </Typography>

                    <Typography fontSize={20} fontWeight={'bold'} sx={{ color: '#47A9E0' }}>
                        R$ {valor.toLocaleString('BRL')}
                    </Typography>

                    {
                        isProntaEntrega &&
                        <ProntaEntrega />
                    }
                </CardContent>

            </Card>
        </Grid>
    )

}