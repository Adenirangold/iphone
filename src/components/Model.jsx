import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";

function Model() {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "Iphone 15 Pro in Natural Titanium",
    color: ["#8f8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              controlRef={cameraControlSmall}
              groupRef={small}
              gsapType="view1"
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            ></ModelView>
            <ModelView
              index={2}
              controlRef={cameraControlLarge}
              groupRef={large}
              gsapType="view2"
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            ></ModelView>
            <Canvas
              className="w-full h-full "
              style={{
                top: 0,
                left: 0,
                top: 0,
                right: 0,
                overflow: "hidden",
                position: "fixed",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port> </View.Port>
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm mb-5 font-light text-center ">
              {model.title}
            </p>
            <div className="flex-center">
              <ul className=" color-container">
                {models.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className="w-6 h-6 cursor-pointer rounded-full mx-2"
                      style={{
                        backgroundColor: item.color[0],
                      }}
                      onClick={() => {
                        setModel(item);
                      }}
                    ></li>
                  );
                })}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    className="size-btn"
                    key={label}
                    onClick={() => {
                      setSize(value);
                    }}
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model;
