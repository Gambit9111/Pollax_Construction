import type { NextPage } from "next";

import Hero from "@/components/heroSections/one/Hero";
import ImageSlider from "@/components/features/image-slider/one/ImageSlider";
import Cta from "@/components/cta/one/Cta";

const Home: NextPage = () => {
  return (
    <main className="h-full w-full">
      <Hero />
      <ImageSlider />
      <Cta />
    </main>
  );
};

export default Home;
