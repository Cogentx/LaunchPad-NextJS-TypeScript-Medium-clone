import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Cogent X Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
        <Banner />
      </header>

      {/* Posts Section */}
      <section>

      </section>
    </div>
  );
};

export default Home;

// Enable SSR in Next.js for this page
export const getServerSideProps =async () => {
  // fetch data from Sanity backend
  
}
