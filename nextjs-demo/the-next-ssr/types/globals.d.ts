type Cabin = {
    id: number;
    name: string;
    max_capacity: number;
    regular_price: number;
    discount: number;
    image_url: string;
};

type Country = {
    name: string;
    flag: string;
};

interface LayoutProps {
    children: React.ReactNode;
}

type Booking = {
    id: number;
    guest_id: number;
    start_date: string;
    end_date: string;
    number_of_nights: number;
    total_price: number;
    number_of_guests: number;
    status: string;
    created_at: string;
    cabins: {
        name: string;
        image_url: string;
    };
};