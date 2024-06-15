import ReservationCard from "@/app/_components/ReservationCard";

export const metadata = {
    title: "Reservations",
};

type Booking = {
    id: number;
    cabin: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    total: number;
};

export default function Page(): JSX.Element {
    // CHANGE
    const bookings: Booking[] = [];

    return (
        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-7">
                Your reservations
            </h2>

            {bookings.length === 0 ? (
                <p className="text-lg">
                    You have no reservations yet. Check out our{" "}
                    <a className="underline text-accent-500" href="/cabins">
                        luxury cabins &rarr;
                    </a>
                </p>
            ) : (
                <ul className="space-y-6">
                    {bookings.map((booking) => (
                        <ReservationCard booking={booking} key={booking.id} />
                    ))}
                </ul>
            )}
        </div>
    );
}
