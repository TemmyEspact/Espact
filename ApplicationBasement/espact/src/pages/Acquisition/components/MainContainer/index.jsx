import Sidebar from './Sidebar';
import Header from './Header';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

export default function AcquisitionMainContainer({ children }) {
    const [page, setPage] = useState('');
    const location = useLocation();

    useEffect(() => {
        const arraySet = location.pathname.split('/');
        setPage(arraySet[1]);
    }, [location]);
    return (
        <div className="bg-[#FFFFFF] flex">
            {/* <Sidebar /> */}
            <div className="flex-1 w-full h-full">
            <Header />
                <div className="pt-[50px] w-full">{children}</div>
            </div>
        </div>
        
    );
}
