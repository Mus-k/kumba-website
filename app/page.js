import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Slider from "./components/Slider";
import lightbox from "../public/lightbox.json";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Slider />

      <Services />
      <Gallery items={lightbox} />
    </main>
  );
}
