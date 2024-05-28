import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line no-unused-vars
const PrivetRout = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        <p>Loading..</p>
    }

    if (!user) {
        <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivetRout;