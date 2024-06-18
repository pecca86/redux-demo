import React from 'react';
import { auth } from '../_lib/auth';

export const metadata = {
    title: "Accounts",
};


const Page = async () => {
    const session = await auth();
    return (
        <h2 className="font-semibold text-2xl text-accent-400 mb-7">
            {`Welcome, ${session?.user?.name ? session.user.name : 'dudette'}!`}
        </h2>
    );
}

export default Page;
