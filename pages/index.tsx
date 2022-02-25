import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Cogent X Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
    </div>
  );
};

export default Home;
