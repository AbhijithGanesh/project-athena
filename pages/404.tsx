import type { NextPage } from "next";
import Image from "next/image";
import SearchEngineTags from "../components/seo";

const Home: NextPage = () => {
  return (
    <>
      <SearchEngineTags title="Page Not Found - Project Athena" />
      <div className="flex flex-col justify-center items-center p-2 lg:min-h-screen">
        <section className="text-white flex flex-auto text-5xl font-bold items-center justify-center gap-4">
          <Image
            src="/official.svg"
            width={144}
            height={32}
            alt="Data on Kubernetes community"
          />
          Page Not Found
        </section>
      </div>
    </>
  );
};

export default Home;
