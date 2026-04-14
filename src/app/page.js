'use client'

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import LightRays from "@/components/section-components/LightRays";
import NavigateSection from "@/components/section-components/NavigateSection";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null)
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
      <section ref={scrollRef} className="w-full h-full absolute z-10 top-0 p-[2%] overflow-y-auto scroll-smooth no-scrollbar">
        <NavBar scrollRef={scrollRef}></NavBar>
        <Hero></Hero>
        <Hero></Hero>
        <NavigateSection></NavigateSection>
      </section>
    </div>
  );
}
