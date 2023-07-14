import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

import canecas1 from '../../assets/canecas-1.png';
import canecas2 from '../../assets/canecas-2.webp';
import canecas3 from '../../assets/canecas-3.png';

export default function CarouselHome() {

    const matches = useMediaQuery('(max-width:600px)');

    return (
        <Container 
            maxWidth={!matches && "lg" }
            sx={{ 
                maxHeight: 300, 
                borderRadius: 2, 
                overflow: 'hidden', 
                alignItems: 'center' 
            }}
        >
            <Carousel 
                autoPlay 
                infiniteLoop 
                showThumbs={false} 
                showIndicators={false} 
                showStatus={false} 
                showArrows={false}
                transitionTime={3000}
                swipeable
            > 
                    <div>
                        <img src={canecas1} style={{ width: '100%' }}/>
                    </div>
                    <div>
                        <img src={canecas2} style={{ width: '100%' }}/>
                    </div>
                    <div>
                        <img src={canecas3} style={{ width: '100%' }}/>
                    </div>
            </Carousel>
       </Container>
    )

}
