import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { dispatch } = useContext(AppContext);

    const updCrncy = () => {        
        dispatch({
            type: 'ADD_CURRENCY',
            payload: '$',
        });
    }

    return (
        <div className='alert alert-info'>
            <label for="currency">Currency</label>
            <select id='currency' onChange={updCrncy}>
                <option value='$' >$ Dollar</option>
                <option value='£' selected>£ Pound</option>
                <option value='€' >€ Euro</option>
                <option value='₹' >₹ Ruppee</option>
            </select>
        </div>
    );
};
export default ChangeCurrency;
