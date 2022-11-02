import type { NextPage } from "next";
import { remark } from 'remark';
import html from 'remark-html';


let docsPage: NextPage = () => {
  return (
    <>
      <section className="bg-dok h-screen">Hello World</section>
    </>
  );
};

export default docsPage;
