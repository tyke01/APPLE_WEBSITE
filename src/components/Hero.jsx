import { heroVideo, smallHeroVideo } from "../utils";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import { useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 750 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 750) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -10,
      delay: 2,
    });
  }, []);

  
  return (
    <section className="w-full nav-height bg-black relative">
      <div className=" h-4/5 w-full flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>

        <div className="md:w-10/12 w-9/12">
          <video
            className=" pointer-events-nones"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-30"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>

        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
