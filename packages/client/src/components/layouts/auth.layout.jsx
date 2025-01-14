import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
    return (
        <>
            <ToastContainer
                autoClose={2500}
                position="top-right"
            />
            <Outlet />
        </>
    )
}

export default AuthLayout