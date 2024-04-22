import React from 'react';
import { useSelector } from 'react-redux';

const BalanceDisplay = () => {
    const account = useSelector(state => state.account);
    const { balance, loan, loading } = account;

    if (loading) {
        return <h2>Loading...</h2>
    }
    
    return (
        <div>
            <h2>Balance: ${balance}</h2>
            <h3>Loan: ${loan}</h3>
        </div>
    );
}

export default BalanceDisplay;
