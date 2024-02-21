import CustomImage from "@/components/image";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const ProductDetailedPage = async ({ params: { id } }: Props) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return (
      <>
        <section className="text-gray-600 body-font overflow-hidden py-10">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <CustomImage product={product} />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 pt-2">
                  {product?.title}
                </h1>
                <div className="flex mb-4 pt-3">
                  <span className="flex items-center">
                    {product?.rating.rate && (
                      <div className="flex items-center ml-2 mr-6">
                        {Array.from(
                          {
                            length: Math.floor(product.rating.rate),
                          },
                          (_, i) => (
                            <StarIcon
                              key={i}
                              className="h-4 w-4 text-yellow-500"
                            />
                          )
                        )}
                        {Array.from(
                          {
                            length: 5 - Math.floor(product.rating.rate),
                          },
                          (_, i) => (
                            <StarIconOutline
                              key={i}
                              className="h-4 w-4 text-yellow-500"
                            />
                          )
                        )}
                      </div>
                    )}
                  </span>
                </div>
                <p className="leading-relaxed mb-10">{product?.description}</p>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product?.price}
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add to bag
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    notFound();
  }
};

export default ProductDetailedPage;
