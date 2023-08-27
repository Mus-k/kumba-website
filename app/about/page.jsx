import Image from "next/image";
export default function About() {
  return (
    <div className="bg-black h-full w-full flex justify-center items-center pt-10 p-10 ">
      <div>
        <h2 className="title">About </h2>

        <div className="about-container flex flex-row justify-center items-center w-full">
          <div>
            <Image
              src="/basicImages/salon.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1>Our mission</h1>
            <p>
              Our mission is to make every client feel confident and beautiful
              by providing top-quality hair braiding, hair extensions, and hair
              weaving services. We believe that everyone deserves to look and
              feel their best, and we’re here to make that happen.
            </p>
          </div>
        </div>
        <div className="about-bottom">
          <h2>
            Come visit us at Kumba Salon and let us help you achieve your hair
            goals!
          </h2>
        </div>
      </div>
    </div>
  );
}
