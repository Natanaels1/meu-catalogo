import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import iconLogo from '../../assets/bolsa-de-compras.png';

export default function Termos() {

    const matches = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                bgcolor: '#47A9E0'
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
                
                <h1>Termos de Uso da Loja Online Exôdo Sublimação</h1>

                <p>
                    Bem-vindo(a) à loja online Exôdo Sublimação! Antes de utilizar os nossos serviços e adquirir os nossos produtos, pedimos que leia atentamente estes Termos de Uso, pois eles regulam o seu acesso e uso da nossa plataforma. Ao acessar e utilizar a loja Exôdo Sublimação, você concorda e aceita integralmente todos os termos e condições aqui estabelecidos. Caso não concorde com algum dos itens, por favor, não continue a utilizar nosso site.
                </p>

                <h2>1. Informações Gerais:</h2>
                <p>
                    1.1. A loja Exôdo Sublimação é uma plataforma online que comercializa produtos artesanais personalizados através do método de sublimação.<br />
                        1.2. Ao realizar compras em nossa loja, você declara ser maior de 18 anos ou possuir a devida autorização dos responsáveis legais para realizar a aquisição.
                </p>

                <h2>2. Conta de Usuário:</h2>
                <p>
                    2.1. Para realizar compras na Exôdo Sublimação, é necessário criar uma conta de usuário. As informações fornecidas durante o cadastro devem ser precisas e completas.<br />
                        2.2. Você é responsável pela confidencialidade de sua conta e senha, sendo totalmente responsável por quaisquer atividades realizadas em sua conta.
                </p>

                <h2>3. Produtos e Serviços:</h2>
                <p>
                    3.1. A Exôdo Sublimação se compromete a oferecer produtos artesanais de alta qualidade, personalizados conforme as especificações indicadas pelo cliente.<br />
                        3.2. As imagens dos produtos exibidas em nosso site são meramente ilustrativas e podem apresentar variações de cor e textura em relação ao produto final.
                </p>

                <h2>4. Preços e Pagamentos:</h2>
                <p>
                    4.1. Os preços dos produtos estão descritos de forma clara em nossa loja virtual, e eventuais descontos ou promoções serão indicados.<br />
                        4.2. Os pagamentos podem ser realizados através dos meios disponibilizados em nosso site, garantindo a segurança e a proteção de seus dados financeiros.
                </p>

                <h2>5. Envio e Entrega:</h2>
                <p>
                    5.1. O prazo de entrega será informado durante o processo de compra. Esse prazo pode variar de acordo com a localização do cliente e a disponibilidade dos produtos.<br />
                        5.2. A Exôdo Sublimação não se responsabiliza por atrasos na entrega causados por problemas de transporte ou eventos de força maior.
                </p>

                <h2>6. Política de Trocas e Devoluções:</h2>
                <p>
                    6.1. Caso o produto recebido apresente defeito ou não esteja de acordo com as especificações do pedido, entre em contato conosco dentro do prazo de 7 (sete) dias após o recebimento para solicitar a troca ou devolução.<br />
                        6.2. Para mais informações sobre trocas e devoluções, consulte nossa Política de Trocas e Devoluções disponível em nosso site.
                </p>

                <h2>7. Propriedade Intelectual:</h2>
                <p>
                    7.1. Todos os direitos de propriedade intelectual relacionados aos produtos, imagens e conteúdos presentes na Exôdo Sublimação são de nossa exclusiva titularidade ou licenciados sob autorização.<br />
                        7.2. É expressamente proibido copiar, reproduzir, modificar ou distribuir qualquer conteúdo presente em nosso site sem a nossa autorização prévia por escrito.
                </p>

                <h2>8. Privacidade e Proteção de Dados:</h2>
                <p>
                    8.1. A Exôdo Sublimação valoriza a privacidade de seus clientes. Nossa Política de Privacidade descreve como coletamos, utilizamos e protegemos os dados pessoais fornecidos por você durante a utilização de nossos serviços.
                </p>

                <h2>9. Disposições Gerais:</h2>
                <p>
                    9.1. Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. Caso isso ocorra, as mudanças serão devidamente comunicadas em nosso site.<br />
                        9.2. O uso contínuo dos nossos serviços após quaisquer alterações nos Termos de Uso implicará na aceitação das novas condições.<br />
                            9.3. Em caso de dúvidas ou esclarecimentos sobre os Termos de Uso, entre em contato conosco através dos canais disponíveis em nosso site.
                        </p>

                        <p>
                            Agradecemos por escolher a Exôdo Sublimação como sua loja online de produtos artesanais personalizados. Estamos à sua disposição para proporcionar a melhor experiência de compra possível. Boas compras!
                        </p>
                
            </Container>

            <Footer />
        </Box>
    )

}