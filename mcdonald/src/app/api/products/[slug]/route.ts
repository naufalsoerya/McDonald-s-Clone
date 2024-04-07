import ProductModel from "@/db/models/product";
// import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {

  const products = await ProductModel.getProductBySlug(params.slug);

  return Response.json(
    {
      data: products,
    },
    { status: 200 }
  );
}
