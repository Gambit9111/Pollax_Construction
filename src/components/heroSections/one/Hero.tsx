import Button from "@/components/buttons/one/Button";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="relative mx-auto flex max-w-lg flex-col px-4 pt-9 pb-6">
      <h3 className="z-10 font-medium italic">- About Us</h3>
      <h1 className="z-10 pr-20 text-4xl font-extrabold leading-9">
        Our mission is to construct a better future
      </h1>
      <p className="z-10 pt-4 pr-8 pb-4 text-sm font-light">
        We are the premier construction company with a simple purpose: to
        construct a better future. The company is known for shaping skylines and
        delivering iconic projects around the world
      </p>
      <span className="absolute top-0 right-0 z-0 h-full w-3/4 border-b border-black bg-my-skin" />
      <Button />
    </section>
  );
}
