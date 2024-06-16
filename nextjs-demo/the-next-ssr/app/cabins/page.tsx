import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// Different caching strategies can be used for different parts of the application.
// export const revalidate = 0; // Revalidate the page every 0 seconds == does not cache the page. [ 1 ]
//export const revalidate = 3600; // Revalidate the page every 3600 seconds. [ 2 ]

export const metadata = {
    title: "Cabins",
};

type PageProps = {
    searchParams: { [key: string]: string }
};

export default function Page({ searchParams }: PageProps): JSX.Element {

    const filter = searchParams?.capacity ?? "all";

    return (
        <div>
            <h1 className="text-4xl mb-5 text-accent-400 font-medium">
                Our Luxury Cabins
            </h1>
            <p className="text-primary-200 text-lg mb-10">
                Cozy yet luxurious cabins, located right in the heart of the Italian
                Dolomites. Imagine waking up to beautiful mountain views, spending your
                days exploring the dark forests around, or just relaxing in your private
                hot tub under the stars. Enjoy nature&apos;s beauty in your own little
                home away from home. The perfect spot for a peaceful, calm vacation.
                Welcome to paradise.
            </p>
            <div className="flex justify-end mb-8">
                <Filter />
            </div>
            {/* the key tells the suspense when it should be triggered again */}
            <Suspense fallback={<Spinner />} key={filter}> 
                <CabinList filter={filter} />
                <ReservationReminder />
            </Suspense>
        </div>
    );
}