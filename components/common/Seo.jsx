import Head from "next/head";

const Seo = ({ pageTitle, pageImage }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || TrucksData - Find the best truck for you.`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:image" content={pageImage ? pageImage : null}/>
    </Head>
  </>
);

export default Seo;
