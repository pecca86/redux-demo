const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
    loading: false
};


export default function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case 'account/deposit':
            return {
                ...state,
                balance: state.balance + action.payload,
                loading: false
            };
        case "account/addingSecretBonus":
            return {
                ...state,
                loading: true
            };
        case 'account/withdraw':
            return {
                ...state,
                balance: state.balance - action.payload
            };
        case 'account/loanRequest':
            return {
                ...state,
                loan: state.loan + action.payload.amount,
                loanPurpose: action.payload.loanPurpose,
                balance: state.balance + action.payload.amount
            };
        case 'account/loanPay':
            return {
                ...state,
                loan: state.loan - action.payload
            };
        default:
            return state;
    }
}


export const deposit = (amount) => {
    // return {
    //     type: 'account/deposit',
    //     payload: amount
    // };
    return async (dispatch) => {
        dispatch({
            type: 'account/addingSecretBonus'
        });

        setTimeout(() => {
            dispatch({
                type: 'account/deposit',
                payload: amount + 11
            });
        }, 2000);
    };
};

export const withdraw = (amount) => {
    return {
        type: 'account/withdraw',
        payload: amount
    };
};

export const loanRequest = (amount, loanPurpose) => {
    return {
        type: 'account/loanRequest',
        payload: {
            amount,
            loanPurpose
        }
    };
};

export const loanPay = (amount) => {
    return {
        type: 'account/loanPay',
        payload: amount
    };
};