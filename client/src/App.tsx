import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import ContactUs from './pages/Contact';
import MarketAnalysis from './pages/services/MarketAnalysis';
import AirFreightServices from './pages/services/AirFreightServices';
import SeaFreightServices from './pages/services/SeaFreightServices';
import TrainFreightServices from './pages/services/TrainFreightServices';
import ProjectCargoServices from './pages/services/ProjectCargoServices';
import AlcoholWineExports from './pages/services/AlcoholWineExports';
import LuxuryVehicleExportImport from './pages/services/LuxuryVehicleExportImport';
import WarehousingServices from './pages/services/WarehousingServices';
import ClientBriefForm from './components/ClientBriefForm';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import OurEmployees from './pages/OurEmployees';
import { AuthPage } from './pages/auth/Authentication';
import KYCVerification from './pages/KycVerification';
import Profile from './pages/Profile';
import { UserContextProvider } from './Context/UserContext';

const App = () => {

	return (
		<UserContextProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='/aboutus' element={<AboutUs />} />
					<Route path='/partners' element={<Partners />} />
					<Route path='/contactus' element={<ContactUs />} />
					<Route path='/ouremployees' element={<OurEmployees />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='auth' element={<AuthPage />} />
					<Route path='kycverification' element={<KYCVerification />} />
					<Route path='profile' element={<Profile />} />
					<Route path='services/market-analysis' element={<MarketAnalysis />} />
					<Route path='services/air-freight' element={<AirFreightServices />} />
					<Route path='services/sea-freight' element={<SeaFreightServices />} />
					<Route path='services/train-freight' element={<TrainFreightServices />} />
					<Route path='services/project-cargo' element={<ProjectCargoServices />} />
					<Route path='services/alcohol-wine-exports' element={<AlcoholWineExports />} />
					<Route path='services/luxury-vehicle-export-import' element={<LuxuryVehicleExportImport />} />
					<Route path='services/warehousing' element={<WarehousingServices />} />
					<Route path='clientbriefform' element={<ClientBriefForm />} />
				</Route>
			</Routes>
		</UserContextProvider>
	)
}

export default App;