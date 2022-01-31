import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { Featured } from '../components/Featured';
import { PizzaList } from '../components/PizzaList';
import styles from '../styles/Home.module.css';

const DEV_URL = process.env.DEV_URL;

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Way</title>
        <meta name="description" content="Best Pizza Shop in Punjab." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  // get the current environnement
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  const res = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/products`);
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
