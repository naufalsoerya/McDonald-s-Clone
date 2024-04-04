"use client";
import Image from "next/image";
import bannerProduct from "../../../../assets/bannerProduct.jpg";
import bannerProduct2 from "../../../../assets/bannerProduct2.jpg";
import CardProduct from "@/components/CardProduct";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

interface ArrayOfProduct {
  data: Product[];
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("error");
      }

      const responseJson = await response.json();
      setProducts(responseJson.data);
    }
    fetchData();
  }, []);
  return (
    <div className="bg-white">
      {/* banner product */}
      <div className="w-full">
        <Image alt="bannerProduct" src={bannerProduct} className="w-full" />
      </div>

      {/* body product */}
      <h1 className="text-center text-gray-800 text-4xl font-bold mt-14 mb-12">
        Semua Menu Kami
      </h1>
      <div>
        <div className="grid grid-cols-4 gap-10 mt-10">
          {products.map((product, idx) => (
            <CardProduct key={idx} product={product} />
          ))}
        </div>

        {/* banner footer */}
        <div className="w-full">
          <Image alt="bannerProduct2" src={bannerProduct2} className="w-full" />
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
