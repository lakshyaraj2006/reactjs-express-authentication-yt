import { ToastContainer } from 'react-toastify'
import Header from '../UI/header.component'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <Header />
            <ToastContainer
                autoClose={2500}
                position='top-right'
            />
            <Outlet />
        </>
    )
}

export default RootLayout