import Services from "./components/Services";
import Slider from "./components/Slider";
import services from "../public/services.json";
import Experts from "./components/Experts";
import Details from "./components/Details";
import SalonIntro from "./components/SalonIntro";
import CountUpComponent from "./components/CountUp";
import "../app/globals.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Slider />
      <Services items={services} />
      <Details />
      <SalonIntro />
      <CountUpComponent />
      <Experts />
    </main>
  );
}
