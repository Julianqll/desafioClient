import { Navigate } from "react-router-dom";
import authInstance from "../auth";

const PrivateRoute = ({ element, roles }: { element: JSX.Element, roles: number[] }) => {

    const user = authInstance.getUser();

    // Verificar si el usuario está autenticado y tiene el rol adecuado
    if (user && roles.some(role => user.groups.includes(role))) {
        return element;
    } else {
        return <Navigate to="/login" />;
    }
};

export default PrivateRoute;