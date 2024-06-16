import React from 'react';
import CabinCard from "@/app/_components/CabinCard";
import { unstable_noStore as noStore } from 'next/cache';
import { getCabins } from "../_lib/data-service";

const CabinList = async ({ filter }: { filter: string }) => {
    noStore(); // prevent caching of this component, this will be the way to go with Partial Pre-rendering

    const cabins: Cabin[] = await getCabins();

    if (cabins.length <= 0) { return null; }

    let filteredCabins: Cabin[];

    if (filter === "all") {
        filteredCabins = cabins;
    } else if (filter === "small") {
        filteredCabins = cabins.filter((cabin) => cabin.max_capacity === 1 || cabin.max_capacity === 5);
    } else if (filter === "medium") {
        filteredCabins = cabins.filter((cabin) => cabin.max_capacity === 6 || cabin.max_capacity === 10);
    } else if (filter === "large") {
        filteredCabins = cabins.filter((cabin) => cabin.max_capacity > 10);
    } else {
        filteredCabins = cabins;
    }


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {filteredCabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    );
}

export default CabinList;
