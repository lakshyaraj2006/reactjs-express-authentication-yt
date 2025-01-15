import { ToastContainer } from 'react-toastify'
import Header from '../UI/header.component'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../../context/AuthProvider'

const RootLayout = () => {
    return (
        <AuthProvider>
            <Header />
            <ToastContainer
                autoClose={2500}
                position='top-right'
            />
            <Outlet />
        </AuthProvider>
    )
}

export default RootLayout