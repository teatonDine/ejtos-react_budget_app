import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetInput = () => {
    const { budget } = useContext(AppContext);

    const checkCost = () => {
        alert("Budget cannot be lower than spending.");
    }

    return (
        <input type='number' 
        id='budget' 
        value={budget} 
        onChange={checkCost}>
        </input>
    );
};
export default BudgetInput;
