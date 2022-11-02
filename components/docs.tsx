import type { NextPage } from "next";

let GoToDocs: NextPage = () => {
  return (
    <>
      <main className="flex justify-center my-4">
        <section className="bg-sky-800 w-fit text-white font-regular text-lg p-2 rounded-lg hover:bg-sky-900">
          <a href="/docs/" className="">
            Go To Docs
          </a>
        </section>
      </main>
    </>
  );
};

export default GoToDocs;
