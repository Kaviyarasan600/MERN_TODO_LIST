import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBArs } from './NavBArs';

function RootLayout() {
    return (
        <>
            <NavBArs />
            <ToastContainer 
                limit={1}
                pauseOnFocusLoss = {false}
            />
            <Outlet />
        </>
    )
}

export default RootLayout
