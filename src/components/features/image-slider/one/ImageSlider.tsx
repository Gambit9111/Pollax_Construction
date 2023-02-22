"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import "./style.css";
import { images_array } from "./images";

type Props = {};

export default function ImageSlider({}: Props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // setWidth(carousel.current!.clientWidth);
    // ignore typescript
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="features-image-slider-two mx-auto max-w-lg"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width - 10 }}
        className="inner-carousel"
      >
        {images_array.map((image) => (
          <motion.div key={image.id} className="item pt-4 pl-4">
            <Image
              quality={100}
              priority
              loading="eager"
              className="myImage border-b border-l border-my-black"
              src={image.image}
              alt={image.alt}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
