import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";


const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isLoading, user, isAuthenticated } = useUser();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, isLoading, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return children;
}

export default ProtectedRoute;
