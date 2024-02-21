import Hero from "@/components/hero";
import Product from "@/components/product";
import { ProductType } from "@/interface";

async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: ProductType[] = await res.json();

  return (
    <main className="min-h-screen max-w-7xl pt-20 mx-auto px-8 xl:px-0 ">
      <Hero />
      <section className=" flex flex-col space-y-12 pb-20">
        <h1 className="text-4xl font-bold text-center pt-10">ONLILE SHOP</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.map((product) => (
            <Product key={product?.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
