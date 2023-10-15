import Image from "next/image";
import "../styles/About.css";
export default function About() {
  const aboutBg = {
    backgroundImage: "url('/basicImages/aboutBg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "none",
  };
  return (
    <div
      style={aboutBg}
      className="about-page bg-black w-full pt-20 p-6 flex justify-center items-center"
    >
      <div className="about-wrapper">
        <h2 className="about-title text-pink-200 py-10 text-lg w-full md:text-4xl font-semibold ">
          About{" "}
        </h2>

        <div className="about-container flex flex-row justify-center items-center w-full">
          <div className="about-left">
            <Image
              src="/basicImages/salon.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className="about-right">
            <h1 className="text-lg  lg:py-8 md:text-3xl text-pink-200 font-semibold">
              Our mission
            </h1>
            <p className="text-white">
              Our mission is to make every client feel confident and beautiful
              by providing top-quality hair braiding, hair extensions, and hair
              weaving services. We believe that everyone deserves to look and
              feel their best, and we’re here to make that happen.
            </p>
          </div>
        </div>
        <div className="about-bottom py-10 ">
          <h2 className="text-white">
            Come visit us at Kumba Salon and let us help you achieve your hair
            goals!
          </h2>
        </div>
      </div>
    </div>
  );
}
