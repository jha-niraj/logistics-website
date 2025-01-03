import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import ContactUs from './pages/Contact';
import FrieghtForwarding from './pages/services/FreightForwarding';
import Nvocc from './pages/services/Nvocc';
import CustomBrokerage from './pages/services/CustomBrokerage';
import BreakBulk from './pages/services/Breakbulk';
import BillLanding from './pages/services/BillLanding';
import MarketAnalysis from './pages/services/MarketAnalysis';
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
					<Route path='services/freight-forwarding' element={<FrieghtForwarding />} />
					<Route path='services/nvocc' element={<Nvocc />} />
					<Route path='services/custom-brokerage' element={<CustomBrokerage />} />
					<Route path='services/break-bulk-project-cargo' element={<BreakBulk />} />
					<Route path='services/bill-of-landing' element={<BillLanding />} />
					<Route path='services/market-analysis' element={<MarketAnalysis />} />
					<Route path='clientbriefform' element={<ClientBriefForm />} />
				</Route>
			</Routes>
		</UserContextProvider>
	)
}

export default App;