import type { NextPage } from "next";
import Image from "next/image";
import squareImage from "../../public/landingPage/squareimg.webp";

import Hero from "@/components/heroSections/one/Hero";
import ImageSlider from "@/components/features/image-slider/one/ImageSlider";
import Cta from "@/components/cta/one/Cta";

const Home: NextPage = () => {
  return (
    <main className="h-full w-full">
      {/* mobile screen */}
      <span className="lg:hidden">
        <Hero />
        <ImageSlider />
        <span className="h-full w-full pr-4">
          <Cta />
        </span>
      </span>
      {/* desktop screen */}
      <span className="hidden border-b border-black lg:flex">
        <section className="w-1/2 border-r border-black">
          <div className="flex min-h-[22rem] border-b border-black">
            <div className="flex h-full w-1/2 items-center justify-center border-r border-black p-8">
              <Image
                src={squareImage}
                alt="square"
                className="mx-auto aspect-square h-full w-full object-cover"
              />
            </div>
            <div className="flex min-h-full w-1/2 items-end bg-my-skin pb-8 pl-8 pr-16">
              <p className="text-lg uppercase leading-5 wide:text-xl">
                Transforming skylines and creating icons
              </p>
            </div>
          </div>
          <div>
            <Hero />
          </div>
        </section>
        <section className="w-1/2">part2</section>
      </span>
    </main>
  );
};

export default Home;
