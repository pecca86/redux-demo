import { getBookings } from "../../../services/apiBookings";
import { useQueryClient, useQuery } from "@tanstack/react-query";

export const useBookings = () => {
    const queryClient = useQueryClient();

    const { data, isLoading, error } = useQuery(
        {
            queryKey: ["bookings"],
            queryFn: getBookings
        }
    );

    return { bookings: data, isLoading, error };
};