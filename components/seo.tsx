import Head from "next/head";

interface SEOProps {
  title: string;
}

let SearchEngineTags = (props: SEOProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/icon.png" />
      </Head>
    </>
  );
};

export default SearchEngineTags;
