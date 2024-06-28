import Image from "next/image";
import { NavigationBar } from "@/components/NavigationBar";
import BannerImg from "/public/static/images/banner-img.svg";
import JourneyImg from "/public/static/images/journey-img.svg";
import PatternBanner from "/public/static/images/PatternBanner.svg";
export default function Home() {
  return (
    <main>
      <NavigationBar />

      <section className="py-44">
        <div className="container px-6 flex items-center">
          <div className="w-full grid grid-cols-3 items-center px-24">
            <div className="space-y-2 col-span-2">
              <h1 className="font-bold text-6xl">Code Realities</h1>
              <p className="font-medium text-lg">Crafting a Better Tomorrow with Every Keystroke.</p>
            </div>
            <div className="flex items-center relative">
              <Image className="relative" width={224} height={189} src={BannerImg} alt="banner-image" />
              {/*<Image width={224} height={189} src={PatternBanner} alt="pattern" className="absolute top-0 -z-10 blur-lg"/>*/}
            </div>
          </div>
        </div>
      </section>

      <section className="py-44">
        <div className="container px-6 flex items-center">
          <div className="w-full grid grid-cols-3 items-center px-24">
            <div >
              <Image src={JourneyImg} alt="journey-img"/>
            </div>
            <div className="col-span-2 space-y-4">
              <h3 className="font-bold text-4xl">My Exciting Journey</h3>
              <p className="text-base">
                Starting in vocational school, my curiosity for the world of programming began to grow. I continued learning and developing my skills, from building landing pages with HTML, CSS, and JS to designing user experiences in UI/UX Design.
                <br/>
                <br/>
                Now, I am continuously improving my expertise in frontend development while sharing my knowledge and experiences with my school friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40">
        <div className="container px-6 flex flex-col items-center justify-center space-y-4">
          <h1 className="font-bold text-4xl">Portofolio</h1>
          <div className="grid grid-cols-3">
            <div className="shadow max-w-sm p-3">
              <h4 className="font-bold text-xl">Keluh Kesah SNBT</h4>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, recusandae.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
