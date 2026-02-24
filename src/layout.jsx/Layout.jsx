import Encabezado from '../Components/Encabezado.jsx'
import Navbar from '../Components/Navbar.jsx'
import Pie from '../Components/Pie.jsx'

import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Encabezado />
            <Navbar />
            <main>
             <Outlet />
            </main>
            <Pie />
        </>

 );
}

export default Layout;