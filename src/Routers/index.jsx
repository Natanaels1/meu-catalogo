import Authenticated from './Authenticated';
import NoAuthenticated from './NoAuthenticated';

export default function Routes() {

    const authenticated = false;
    
    return authenticated ? <Authenticated /> : <NoAuthenticated />;
    
}

