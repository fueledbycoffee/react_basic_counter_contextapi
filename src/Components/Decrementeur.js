import React from 'react';
import CompteurContext from '../Provider/CompteurContext';

const Decrementeur = () => {
    return (
        <CompteurContext.Consumer>
            {({ decrementer }) => {
                return <button onClick={decrementer}>-</button>
            }}
        </CompteurContext.Consumer>
    );
}

export default Decrementeur;