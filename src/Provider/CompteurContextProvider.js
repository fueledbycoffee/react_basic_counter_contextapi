import React, { useState } from 'react';
import CompteurContext from './CompteurContext';

const CompteurContextProvider = ({ children }) => {
    const [compteur, setCompteur] = useState(0);

    const incrementer = () => {
        setCompteur(compteur + 1);
    }

    const decrementer = () => {
        setCompteur(compteur - 1);
    }

    return (
        <CompteurContext.Provider
            value={{ compteur, incrementer, decrementer }}
        >
            {children}
        </CompteurContext.Provider>
    );
}

export default CompteurContextProvider;