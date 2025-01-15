import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../../context/AuthProvider";

const AuthLayout = () => {
    return (
        <AuthProvider>
            <ToastContainer
                autoClose={2500}
                position="top-right"
            />
            <Outlet />
        </AuthProvider>
    )
}

export default AuthLayout