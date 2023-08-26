import Link from "next/link";
import Image from "next/image";
import "../styles/SalonIntro.css";
export default function SalonIntro() {
  return (
    <div className="salonIntro">
      <div className="salon-container bg-pink-100">
        <div className="salon-left">
          <h1 className="font-semibold text-xl py-4 text-black md:text-2xl">Hair braiding salon for everyone</h1>
          <p className="text-gray-500">
            At Kumba Salon, we braid and style hair for all hair types and
            textures. Whether you’re looking for a protective style, a new look,
            or just want to maintain your natural hair, we’ve got you covered.
            Our experienced stylists can create any style you desire using the
            latest techniques and products.
          </p>
          <button className="salonBtn">
            <Link href="./contact">contact us</Link>
          </button>
        </div>
        <div className="salon-right">
          <Image
            src="/basicImages/salon.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
