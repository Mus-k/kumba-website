import Services from './components/Services';
import services from '../public/services.json';
import Experts from './components/Experts';
import Details from './components/Details';
import SalonIntro from './components/SalonIntro';
import CountUpComponent from './components/CountUp';
import '../app/globals.css';
import LandingPage from './components/LandingPage';
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<LandingPage />
			<Services items={services} />
			<Details />
			<SalonIntro />
			<CountUpComponent />
			<Experts />
		</main>
	);
}
