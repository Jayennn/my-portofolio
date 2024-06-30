"use client";

import Image from "next/image";
import { NavigationBar } from "@/components/NavigationBar";
import BannerImg from "/public/static/images/banner-img.svg";
import JourneyImg from "/public/static/images/journey-img.svg";
import ProjectSchoolabs from "/public/static/images/project-schoolabs.png";
import ProjectKKS from "/public/static/images/project-kks.png";
import ProjectNuxdesign from "/public/static/images/project-nuxdesign.png";

import githubIcon from "/public/static/icons/github.svg";
import {Card} from "@/components/Card";
import {Button} from "@/components/Button";
import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";
export default function Home() {
  return (
    <main>
      <NavigationBar />

      <section className="py-44 max-w-[90%] mx-auto animate-spin">
        <div className="container px-6 flex items-center">
          <div className="w-full grid grid-cols-3 items-center px-24">
            <div className="space-y-2 col-span-2">
              <h1 className="font-bold text-5xl text-heading">Hi, my name is Giant</h1>
              <p className="font-medium text-lg text-paragraph">Crafting a Better Tomorrow with Every Keystroke.</p>
            </div>
            <div className="flex items-center relative">
              <Image className="relative" width={224} height={189} src={BannerImg} alt="banner-image" />
              {/*<Image width={224} height={189} src={PatternBanner} alt="pattern" className="absolute top-0 -z-10 blur-lg"/>*/}
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="py-44 max-w-[90%] mx-auto animate-spin">
        <div className="container px-6 flex items-center relative">
          <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="w-[10rem] h-[10rem] bg-[#00FF85] opacity-40"></div>
          </div>
          <div className="w-full grid grid-cols-3 items-center px-24">
            <div className="relative">
              <Image src={JourneyImg} alt="journey-img"/>
            </div>
            <div className="col-span-2 space-y-4">
              <h3 className="font-bold text-4xl text-heading">My Exciting Journey 🌟</h3>
              <p className="text-base text-paragraph">
                Starting in vocational school, my curiosity for the world of programming began to grow. I continued learning and developing my skills, from building landing pages with HTML, CSS, and JS to designing user experiences in UI/UX Design.
                <br/>
                <br/>
                Now, I am continuously improving my expertise in frontend development while sharing my knowledge and experiences with my school friends.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                 style={{
                   clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                 }}>
            </div>
          </div>
        </div>
      </section>

      <section id="portofolio" className="py-44 max-w-[90%] mx-auto animate-spin">
        <div className="relative container px-6 flex flex-col items-center justify-center space-y-6">
          <div className="absolute w-full h-full -z-10 bg-gradient-to-b from-slate-300 opacity-80 to-white blur-3xl"></div>
          <div className="flex items-center justify-between w-full">
            <h1 className="font-bold text-4xl text-heading">Portofolio</h1>
            {/*<Button className="font-semibold text-lg group">*/}
            {/*  See All*/}
            {/*  <ChevronRight className="opacity-0 group-hover:opacity-100 -translate-x-5 group-hover:translate-x-0 transition-all ml-2 w-4 h-4" />*/}
            {/*</Button>*/}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Card
              image={ProjectSchoolabs}
              href="https://schoolabs.vercel.app/"
              alt="Schoolabs"
              title="Schoolabs"
              exact="A dynamic and career-focused educational platform designed to help you achieve your goals in UI/UX design and development. It features engaging visuals and an intuitive interface to enhance your learning experience."
            />
            <Card
              image={ProjectKKS}
              href="https://keluh-kesah-snbt-utbk.vercel.app/"
              alt="Keluh Kesah SNBT"
              title="Keluh Kesah SNBT"
              exact="A fun and interactive platform where you can share your amusing complaints and experiences about the SNBT-UTBK exams."
            />
            <Card
              image={ProjectNuxdesign}
              href="https://nux-design.vercel.app/"
              alt="Nux Design"
              title="Nux Design"
              exact="Super branding and creative ideas."
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-44 max-w-[90%] mx-auto animate-spin">
        <div className="container flex items-center justify-center relative">
          <svg className="absolute" width="950" height="512" viewBox="0 0 950 512" fill="none">
            <circle cx="475" cy="256" r="474.5" stroke="black"/>
            <circle cx="475" cy="256" r="374.5" stroke="black"/>
            <circle cx="475" cy="256" r="274.5" stroke="black"/>
            <circle cx="475" cy="256" r="174.5" stroke="black"/>
            <circle cx="475" cy="256" r="74.5" stroke="black"/>
          </svg>
          <div className="flex flex-col items-center justify-center space-y-4">
            <h3 className="text-4xl font-extrabold text-heading">Curiosity Drives Us Forward</h3>
            <Button className="p-6 bg-gray-800 font-bold text-white rounded-3xl">
              Ask Me Anything
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
