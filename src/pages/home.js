import CurrentSandwich from '../components/CurrentSandwich';
import Ingredients from '../components/Ingredients';
import { useState } from 'react';

function Home(){
    // const [sandwich, setSandwich] = useState({
    //     id: 0,
    //     name: 'My Sandwich',
    //     ingredients: ['bread','bacon','lettuce','tomato','bread'],
    //     starred: false
    // })
    return(
        <main>
        <CurrentSandwich 
        // sandwich={sandwich} setSandwich={setSandwich}
        />
        <Ingredients 
        // sandwich={sandwich} setSandwich={setSandwich} 
        />
        </main>
    )
}
export default Home