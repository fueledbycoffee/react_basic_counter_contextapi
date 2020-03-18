import React from 'react';
import CompteurContext from '../Provider/CompteurContext';

const Incrementeur = () => {
    return (
        <CompteurContext.Consumer>
            {({ incrementer }) => {
                return <button onClick={incrementer}>+</button>
            }}
        </CompteurContext.Consumer>

    );
}

export default Incrementeur;