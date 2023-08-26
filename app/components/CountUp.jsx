"use client";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../styles/Counter.css";
export default function CountUpComponent() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
      className="w-full"
    >
      <section className="countUp bg-pink-100 flex justify-center items-center p-6">
        <div className="counter">
          <div className="counter-wrap">
            <div className="count">
              <div className="font-bold text-xl md:text-2xl">
                {" "}
                {counterOn ? (
                  <CountUp start={0} end={1000} duration={2} />
                ) : (
                  <CountUp start={0} end={1000} duration={2} />
                )}
                <span>+</span>
              </div>
              <p className="text-center">Numbers of customers</p>
            </div>
            <div className="count">
              <div className="font-bold text-xl md:text-2xl">
                {" "}
                {counterOn ? (
                  <CountUp start={0} end={1000} duration={2} />
                ) : (
                  <CountUp start={0} end={1000} duration={2} />
                )}
                <span>+</span>
              </div>
              <p className="text-center">Happy clients</p>
            </div>
          </div>
          <div className="counter-wrap">
            <div className="count">
              <div className="font-bold text-xl md:text-2xl">
                {" "}
                {counterOn ? (
                  <CountUp start={0} end={10} duration={2} />
                ) : (
                  <CountUp start={0} end={10} duration={2} />
                )}
                <span>+</span>
              </div>
              <p className="text-center">Awards received</p>
            </div>
            <div className="count">
              {" "}
              <div className="font-bold text-xl md:text-2xl">
                {" "}
                {counterOn ? (
                  <CountUp start={0} end={5} duration={2} />
                ) : (
                  <CountUp start={0} end={5} duration={2} />
                )}
                <span>+</span>
              </div>
              <p className="text-center">Team mebers</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}
