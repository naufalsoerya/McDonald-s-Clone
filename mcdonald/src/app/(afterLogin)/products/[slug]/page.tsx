import { Product } from "@/types";
import Link from "next/link";

async function data(slug: string): Promise<{ data: Product }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/` + slug,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("error");
  }

  return await response.json();
}

export default async function Product({
  params,
}: {
  params: { slug: string };
}) {
  const product = await data(params.slug);

  const displayData = product.data;

  return (
    <div className="bg-white">
      <div className="container mx-auto flex justify-center items-start">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2 pt-20 ml-24">
            <img
              src={displayData.thumbnail}
              alt={displayData.name}
              className="rounded-2xl"
            />
          </div>
          <div className="w-full md:w-1/4 mt-44">
            <h1 className="text-5xl font-bold mb-6">{displayData.name}</h1>
            <p className="text-xl my-2 text-col text-green-600">
              Rp {displayData.price}
            </p>
            <p className="mb-10">{displayData.description}</p>
            <div className="mb-6">
              {/* wishlist button  */}
            </div>
            <Link
              href="/products"
              className="hover:underline hover:underline-offset-2"
            >
              ⟵ Back to All Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
