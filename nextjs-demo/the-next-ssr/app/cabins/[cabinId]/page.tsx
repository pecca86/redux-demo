// "use client";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";


type Params = {
    cabinId: string;
}

// Dynamically generate metadata for each cabin page
export async function generateMetadata({ params }: { params: Params }) {
    const { name }: { name: string } = await getCabin(params.cabinId);
    return {
        title: `Cabin ${name}`,
        description: `Reserve today. Pay on arrival.`

    }
}

// Tell Next.js how many pages there are (aka. id params) so it can pre-render them
export async function generateStaticParams() {
    const cabins = await getCabins();
    const cabinIds = cabins.map(cabin => ({ cabinId: String(cabin.id) }));
    return cabinIds;
}

export default async function Page({ params }: { params: Params }) {

    const cabin: Cabin = await getCabin(params.cabinId);

    return (
        <div className="max-w-6xl mx-auto mt-8">
            <Cabin cabin={cabin} />
            <div>
                <h2 className="text-5xl font-semibold text-center mb-10">
                    Reserve <u><i>{cabin.name}</i></u> today. Pay on arrival.
                </h2>
                {/* Here we use suspense since Reservation makes two API calls that take different amount of time to resolve. */}
                <Suspense fallback={<Spinner />}>
                    <Reservation cabin={cabin} />
                </Suspense>
            </div>
        </div>
    );
}
