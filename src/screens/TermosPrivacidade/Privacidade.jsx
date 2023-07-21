import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Footer from "../../components/Footer";
import iconLogo from '../../assets/bolsa-de-compras.png';
import { useNavigate } from "react-router-dom";

export default function Privacidade() {

    const matches = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                bgcolor: '#F2E572',
                margin: 0,
                padding: 0
            }}
        >
              <header
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: !matches ? 50 : 20
                }}
            >
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        cursor: 'pointer',
                        bgcolor: '#fff',
                        padding: 2,
                        borderRadius: 2,
                        justifyContent: 'center',
                    }} 
                    width={ matches ? '100%' : 'auto'}
                    onClick={() => navigate('/')}
                >
                
                    <img src={iconLogo} style={{ width: 50, marginRight: 10 }} />
                    <Typography variant={ matches ? 'h4' : 'h3' } color="inherit" noWrap fontWeight="bold">
                        Meu Catálogo
                    </Typography>

                </Box>
            </header>

            <Container
                 sx={{
                    width: '100%',
                    bgcolor: '#fff',
                    px: 4,
                    py: 4,
                    mt: 4,
                    mb: 4,
                    borderRadius: 2
                }}
            >
                <h1>Política de Privacidade da Loja Online Exôdo Sublimação</h1>
                <p>
                    Agradecemos por escolher a loja online Exôdo Sublimação ("nós", "nosso" ou "Exôdo Sublimação"). Esta Política de Privacidade tem como objetivo explicar como coletamos, utilizamos, divulgamos e protegemos as informações pessoais dos usuários ("você" ou "seu") ao utilizar nossos serviços e ao acessar nosso site.
                </p>

                <h2>1. Informações Coletadas:</h2>
                <p>
                    1.1. Ao criar uma conta de usuário em nossa plataforma ou realizar uma compra, podemos coletar informações pessoais, tais como nome, endereço de e-mail, endereço de entrega, número de telefone, informações de pagamento e preferências de compra.
                </p>

                <h2>2. Uso das Informações:</h2>
                <p>
                    2.1. Utilizamos as informações pessoais coletadas para processar seus pedidos, fornecer suporte ao cliente, melhorar nossos produtos e serviços, e para fins de marketing, desde que você tenha consentido previamente.
                </p>
                <p>
                    2.2. As informações fornecidas podem ser utilizadas para enviar notificações sobre o status de seus pedidos, atualizações sobre nossos produtos e promoções especiais.
                </p>

                <h2>3. Compartilhamento de Informações:</h2>
                <p>
                    3.1. Nós não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros não afiliados, exceto conforme descrito nesta Política de Privacidade.
                </p>
                <p>
                    3.2. Podemos compartilhar suas informações com prestadores de serviços terceirizados que nos auxiliam na operação do nosso negócio, como processamento de pagamentos, entrega de encomendas e análise de dados. Esses parceiros têm a obrigação de proteger suas informações e utilizá-las somente para os fins específicos contratados.
                </p>

                <h2>4. Segurança das Informações:</h2>
                <p>
                    4.1. Empregamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
                <p>
                    4.2. Utilizamos protocolos de criptografia SSL (Secure Socket Layer) para proteger as transações online e dados financeiros sensíveis.
                </p>

                <h2>5. Cookies e Tecnologias de Rastreamento:</h2>
                <p>
                    5.1. Nosso site utiliza cookies e tecnologias similares para melhorar a experiência do usuário e entender como você interage com nosso site. Essas informações são coletadas de forma anônima e não estão associadas a informações pessoais identificáveis, a menos que você forneça tais informações voluntariamente.
                </p>
                <p>
                    5.2. Você pode configurar seu navegador para recusar todos ou alguns cookies, mas isso pode afetar a funcionalidade do nosso site.
                </p>

                <h2>6. Acesso e Atualização das Informações:</h2>
                <p>
                    6.1. Você tem o direito de acessar, corrigir ou excluir suas informações pessoais armazenadas em nossa base de dados. Para fazer isso, entre em contato conosco através dos meios disponibilizados em nosso site.
                </p>

                <h2>7. Crianças e Privacidade:</h2>
                <p>
                    7.1. A Exôdo Sublimação não coleta intencionalmente informações pessoais de crianças menores de 16 anos. Caso tenhamos conhecimento de que informações de uma criança foram fornecidas sem o consentimento dos pais ou responsáveis, tomaremos as medidas necessárias para remover essas informações de nossos registros.
                </p>

                <h2>8. Alterações na Política de Privacidade:</h2>
                <p>
                    8.1. Reservamo-nos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento. Caso ocorram alterações significativas, iremos notificá-lo através de meios apropriados.
                </p>

                <p>
                    Ao utilizar a loja online Exôdo Sublimação, você concorda com os termos desta Política de Privacidade. Caso tenha dúvidas sobre nossas práticas de privacidade, entre em contato conosco através dos canais disponibilizados em nosso site.
                </p>
                <p>Data de vigência: [data de vigência da política de privacidade]</p>
            </Container>

            <Footer />
        </Box>
    )

}