import type { NextPage } from "next";
import Head from "next/head";

import PlayToEarnBlock from "../components/common/PlayToEarnBlock";
import CompanyBlock from "../components/common/CompanyBlock";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medawars</title>
        <meta name="description" content="Play to earn mobile strategy game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PlayToEarnBlock />
      <CompanyBlock />
    </div>
  );
};

export default Home;
