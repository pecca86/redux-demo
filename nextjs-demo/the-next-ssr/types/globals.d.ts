type Cabin = {
    id: number;
    name: string;
    max_capacity: number;
    regular_price: number;
    discount: number;
    image_url: string;
    description?: string;
};

type Country = {
    name: string;
    flag: string;
};

interface LayoutProps {
    children: React.ReactNode;
}

type Booking = {
    status: string;
    paid: boolean;
    observations: string;
    id: number;
    guest_id: number;
    start_date: string;
    end_date: string;
    number_of_nights: number;
    total_price: number;
    number_of_guests: number;
    status: string;
    created_at: string;
    breakfast: boolean;
    cabin_price: number;
    extra_price: number;
    cabin_id: number;
    total_price: number;
    cabins: {
        name: string;
        image_url: string;
    };
};

type Country = {
    name: string;
    flag: string;
};

type Settings = {
    min_booking_len: number;
    max_booking_len: number;
    max_guests_per_cabin: number;
    breakfast_price: number;
};

type User = {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

type UserData = {
    user: User;
    expires: string;
}