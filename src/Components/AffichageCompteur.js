import React from 'react';
import CompteurContext from '../Provider/CompteurContext';

const AffichageCompteur = () => {
    return (
        <CompteurContext.Consumer>
            {({ compteur }) => {
                return <div>{compteur}</div>
            }}
        </CompteurContext.Consumer>
    );
}

export default AffichageCompteur;