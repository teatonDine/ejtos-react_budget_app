import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [b, setCost] = useState('');
    return (
        <div className='alert alert-secondary'>
            <div>Budget: £
                <input type='number' 
                        step='10' 
                        id='b'
                        max='20000' 
                        value={budget}
                        onChange={(event) => setCost(event.target.value)}>
                    </input></div>
        </div>
    );
};
export default Budget;
