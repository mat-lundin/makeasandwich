import CurrentSandwich from '../components/CurrentSandwich';
import Ingredients from '../components/Ingredients';
import React, { useState } from 'react';

function Home(){
    const [sandwich, setSandwich] = useState({
        id: 0,
        name: 'My Sandwich',
        ingredients: ['bread','bacon','lettuce','tomato','bread'],
        starred: false
    })


    return(
        <main>
        <CurrentSandwich 
        sandwich={sandwich}
        />
        <Ingredients 
        sandwich={sandwich}
        // setSandwich={setSandwich}
        // onAdd={onAdd}
        />
        </main>
    )
}
export default Home