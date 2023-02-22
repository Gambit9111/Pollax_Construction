import Button from "@/components/buttons/one/Button";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      {/* mobile */}
      <section className="relative mx-auto flex max-w-lg flex-col px-4 pt-9 pb-6 lg:hidden">
        <h3 className="z-10 font-medium italic">- About Us</h3>
        <h1 className="z-10 pr-20 text-4xl font-extrabold leading-9">
          Our mission is to construct a better future
        </h1>
        <p className="z-10 pt-4 pr-8 pb-4 text-sm font-light">
          We are the premier construction company with a simple purpose: to
          construct a better future. The company is known for shaping skylines
          and delivering iconic projects around the world
        </p>
        <span className="absolute top-0 right-0 z-0 h-full w-3/4 border-b border-black bg-my-skin" />
        <Button />
      </section>
      {/* desktop */}
      <section className="hidden min-h-[46vh] flex-col justify-between pl-8 pt-8 pb-4 lg:flex">
        <span>
          <h3 className="pb-4 text-lg font-medium italic wide:text-xl">
            - About Us
          </h3>
          <h1 className="mr-48 text-6xl font-extrabold 2xl:mr-[28rem] wide:mr-[40rem] wide:text-7xl">
            Our mission is to construct a better future
          </h1>
        </span>
        <span className="flex">
          <p className="w-1/2 text-sm wide:text-base">
            We are the premier construction company with a simple purpose: to
            construct a better future. The company is known for shaping skylines
            and delivering iconic projects around the world
          </p>
          <Button />
        </span>
      </section>
    </>
  );
}
