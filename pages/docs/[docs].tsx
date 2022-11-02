import type { NextPage } from "next";
import { remark } from "remark";
import html from "remark-html";

let docsPage: NextPage = () => {
  return (
    <>
      <section className="h-screen text-white font-monty font-extralight">Hello World</section>
    </>
  );
};

export default docsPage;
