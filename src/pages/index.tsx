import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';

import { getAll } from '@/services/product';
import MarketPlace from '@/components/MarketPlace';
import { IProduct } from '@/reducers/types';
import NavBar from '@/components/NavBar';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [products, setProduct] = useState<IProduct[]>([]);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAll({});
      setProduct(data.products);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>MKS | MarketPlace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MarketPlace products={products} />
      <NavBar />
    </>
  );
}
