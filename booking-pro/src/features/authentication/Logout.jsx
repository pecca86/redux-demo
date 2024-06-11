import React from 'react';
import { useLogout } from './useLogout';

const Logout = () => {
    const { logout, isLoading } = useLogout();


    return (
        <>
            <button onClick={logout}>Log out</button>
            {isLoading && <p>Logging out...</p>}
        </>
    );
}

export default Logout;
