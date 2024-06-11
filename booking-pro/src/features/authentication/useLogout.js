import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: signOut,
        onSuccess: () => {
            queryClient.invalidateQueries('user');
            navigate('/login', { replace: true });
        },
    });

    return { logout, isLoading };
}