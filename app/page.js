
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Slider from "./components/Slider";
import lightbox from "../public/lightbox.json";
import services from "../public/services.json";
import Welcome from "./components/Welcome";
import Experts from "./components/Experts";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Slider />
      <Services items={services} />
      <Welcome />
      <Gallery items={lightbox} />
      <Experts/>
    </main>
  );
}