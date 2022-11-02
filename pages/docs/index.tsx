import type { NextPage } from "next";
import Image from "next/image";
import SearchEngineTags from "../../components/seo";

interface textProps {
  text: string;
  link: string;
}

let Element = (props: textProps): JSX.Element => {
  return (
    <>
      <section className="my-2 translate-x-4 col-start-1 col-span-2 text-white font-monty font-semibold text-xl hover:bg-slate-700 w-full p-1 rounded-md">
        <a href={`./docs/${props.link}`} className="hover:text-underline">
          {props.text}
        </a>
      </section>
    </>
  );
};

let Handler: NextPage = () => {
  return (
    <>
      <SearchEngineTags title="Athena Docs" />
      <main className="h-full">
        <section className="w-2 bg-white" />
        <section className="sticky top-0 lg:bottom-0 lg:h-screen flex flex-col">
          <nav className="items-center w-full flex lg:block justify-between pt-0 lg:pt-4 pr-5 lg:px-5 z-50">
            <section className="w-full max-w-xs flex items-center gap-4">
              <Image
                src="/official.svg"
                width={54}
                height={16}
                alt="Data on Kubernetes community"
              />
              <section className="text-white text-xl font-bold font-monty">
                Athena Docs
              </section>
              <section className="bg-slate-700 text-sky-300 p-1 rounded-lg text-md font-monty font-extrabold">
                Alpha
              </section>
            </section>
          </nav>
          <section className="pt-5 grid grid-cols-10">
            <Element text="Developer's Guide" link="guide" />
            <Element text="Blogs" link="/blogs" />
            <Element text="Team" link="/team" />
          </section>
        </section>
      </main>
      <footer>
        <section className="lg:px-5 text-2xl font-monty font-light text-white">
          Developed with NextJS
        </section>
      </footer>
    </>
  );
};

export default Handler;
