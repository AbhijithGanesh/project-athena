import type { NextPage } from "next";
import Image from "next/image";
import GoToDocs from "./docs";

let HeroPage: NextPage = () => {
  return (
    <>
      <section>
        <section className=" flex flex-1 justify-center items-center gap-4">
          <Image
            src="/official.svg"
            width={144}
            height={32}
            alt="Data on Kubernetes community"
          />
          <section className="text-white font-bold text-4xl">
            This is work in progress
          </section>
        </section>
        <GoToDocs />
      </section>
    </>
  );
};

export default HeroPage;
