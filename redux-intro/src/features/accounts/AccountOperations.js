import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw, loanRequest, loanPay } from './accountSlice';

const AccountOperations = () => {
    const [opsAmount, setOpsAmount] = useState(0);
    const [loanPurpose, setLoanPurpose] = useState('');
    const [loanAmount, setLoanAmount] = useState(0);

    const dispatch = useDispatch();
    const account = useSelector(state => state.account);
    const { loading } = account;

    const handleDeposit = (e) => {
        e.preventDefault();
        dispatch(deposit(Number(opsAmount)));
    }

    const handleWithdraw = (e) => {
        e.preventDefault();
        dispatch(withdraw(Number(opsAmount)));
    }

    const handleTransfer = (e) => {
        e.preventDefault();
        dispatch(loanPay(Number(opsAmount)));
    }

    const handleRequestLoan = (e) => {
        e.preventDefault();
        dispatch(loanRequest(Number(loanAmount), loanPurpose));
    }

    if (loading) {
        return <h2>Loading...</h2>
    }

    console.log('loading', loading);

    return (
        <div>
            <div className='content-box'>
                <h2>Account Operations</h2>
                <input type="number" placeholder="Amount" value={opsAmount} onChange={e => setOpsAmount(opsAmount => e.target.value)} />
                <button onClick={e => handleDeposit(e)}>Deposit</button>
                <button onClick={e => handleWithdraw(e)}>Withdraw</button>
                <button onClick={e => handleTransfer(e)}>Transfer</button>
            </div>
            <div>
                <h3>Request a loan</h3>
                <input type="text" placeholder="purpose" value={loanPurpose} onChange={e => setLoanPurpose(loanPurpose => e.target.value)}/>
                <input type="number" placeholder="Amount" value={loanAmount} onChange={e => setLoanAmount(loanAmount => e.target.value)}/>
                <button onClick={e => handleRequestLoan(e)}>Request</button>
            </div>
        </div>
    );
}

export default AccountOperations;
