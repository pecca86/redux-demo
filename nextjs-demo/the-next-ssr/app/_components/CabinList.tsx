import React from 'react';
import CabinCard from "@/app/_components/CabinCard";
import { unstable_noStore as noStore } from 'next/cache';
import { getCabins } from "../_lib/data-service";

const CabinList = async () => {
    noStore(); // prevent caching of this component, this will be the way to go with Partial Pre-rendering

    const cabins: Cabin[] = await getCabins();

    if (cabins.length <= 0) { return null; }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {cabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    );
}

export default CabinList;
