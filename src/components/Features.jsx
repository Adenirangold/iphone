import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animation";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

function Features() {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      {
        scrub: 5.5,
      }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden ">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="  mt-32 mb-24 pl-24">
            <h2 className="font-semibold text-5xl lg:text-7xl">iPhone</h2>
            <h2 className="font-semibold text-5xl lg:text-7xl">
              Forged in titanium
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                preload="none"
                autoPlay
                muted
                ref={videoRef}
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
              >
                <source type="video/mp4" src={exploreVideo}></source>
              </video>
            </div>
            <div className=" flex flex-col w-ful relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    className="feature-video g_grow"
                    src={explore1Img}
                    alt="titanium"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    className="feature-video g_grow"
                    src={explore2Img}
                    alt="titanium-2"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace is grey titanium
                      design
                      <span>
                        using the same alloy that spacecraft use to go to mars
                        for missions
                      </span>
                    </span>
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is
                    <span>
                      Titanium has one of the best strength-to-weight ratios
                      making it one of the lightest pro
                      <span className="text-white">
                        you will notice the difference when you pick the phone
                        up
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
