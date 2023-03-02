import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BudgetInput from './BudgetInput';

const Budget = () => {
    const { currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <div>Budget: {currency}
                <BudgetInput />
            </div>
        </div>
    );
};
export default Budget;
