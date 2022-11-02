import type { NextPage } from "next";
import HeroPage from "../components/hero";
import SearchEngineTags from "../components/seo";

const Home: NextPage = () => {
  return (
    <>
      <SearchEngineTags title="Project Athena" />
      <div className="flex flex-col justify-center p-2 lg:min-h-screen">
        <HeroPage />
      </div>
    </>
  );
};

export default Home;
