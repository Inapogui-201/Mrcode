import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { SparklesPreview } from "./SparklesPreview";
import Button from "./Button";
import {FaLocationCrosshairs,FaPhoneFlip} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pb-20 pt-20" id="home">
      <div>
        <Spotlight
          className="h-[80vh] w-[50vw] left-40 top-42"
          fill="pink"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] left-full top-10"
          fill="purple"
        />
        <Spotlight className="h-[80vh] w-[50vw] left-80 top-28" fill="blue" />
      </div>
        <div className="absolute z-50 w-full min-h-96 left-0 -top-72">
          <Image width={100} height={100} src="/grid3.svg" alt="grid" className="w-full h-full opacity-50" priority={false}/>
          
        </div>

      <div className="flex items-center justify-center py-20 relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-12">
          <SparklesPreview />
          
          {/* Button Container */}
          <div className="flex gap-6 -mt-40">
            <Link href="#projects">
              <Button 
                title="Notre stack" 
                icon={<FaLocationCrosshairs />} 
                position="right"
                otherClass="px-6 gap-2 md:px-8"
              />
            </Link>
             <Link href="#contact">
              <Button 
                title="Contactez-nous" 
                icon={<FaPhoneFlip />}
                position="right"
                otherClass="px-6 gap-2 md:px-8"
              />
            </Link> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
