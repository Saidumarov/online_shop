"use client";
import CustomImage from "@/components/image";
import { ProductType } from "@/interface";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
function ShoppingCart() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem("carts");
    if (localStorageData) {
      setProducts(JSON.parse(localStorageData));
    }
  }, []);

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {products?.map((el, index) => (
            <div
              key={index}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <div className=" w-full relative rounded-lg sm:w-20">
                <CustomImage product={el} />
              </div>
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between pt-1 pl-2">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900 line-clamp-1 pr-2">
                    {el?.title}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700 line-clamp-2 pr-3">
                    {el?.description}
                  </p>

                  <div className=" pt-3">
                    {el?.rating.rate && (
                      <div className="flex items-center ml-2 mr-6">
                        <p className=" pr-2">{el?.rating.rate}</p>
                        {Array.from(
                          {
                            length: Math.floor(el?.rating.rate),
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
                            length: 5 - Math.floor(el?.rating.rate),
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
                  </div>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      -
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={el?.count}
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      +
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm flex">
                      {el?.price} <span className=" pl-1">$</span>
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-4 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
