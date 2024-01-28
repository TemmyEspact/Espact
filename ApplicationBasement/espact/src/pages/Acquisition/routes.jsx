import AcquisitionMainContainer from './components/MainContainer';
import { Routes, Route } from 'react-router-dom';

import ESBaseInit, { useFetch } from '@components/ESBase';
import Preloader from '@espact/modules/Preloader';
import { useNavigate } from 'react-router-dom';
import useUserDetails from '@espact/components/Hooks/useUserDetails';
import LandingScreen from './pages/Landing/landing';
import ProjectScreen from './pages/project';
import TeamScreen from './pages/team';
import ServiceScreen from './pages/service';
import DonateScreen from './pages/donate';
import AboutScreen from './pages/about';

export default function PageRoutes() {
    const userDetails = useUserDetails();
    const navigate = useNavigate();

    return (
        <AcquisitionMainContainer>
            <Routes>
                <Route path="/">
                   <Route path="/" element={<LandingScreen />} />
                   <Route path="/project" element={<ProjectScreen />} />
                   <Route path="/team" element={<TeamScreen />} />
                   <Route path="/service" element={<ServiceScreen />} />
                   <Route path="/donate" element={<DonateScreen />} />
                   <Route path="/about" element={<AboutScreen />} />
                </Route>
            </Routes>
        </AcquisitionMainContainer>
    );
}
