import { ObjectId } from "mongodb";
import { db } from "../config";
import { z } from "zod";

type Products = {
  _id: ObjectId;
  name: string; 
  slug: string; 
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};

const ProductValidation = z.object({
  name: z.string({
    required_error: "Name cant be empty",
  }),
  slug: z.string({
    required_error: "Slug cant be empty",
  }),
});

export default class Product {
  static productCollection() {
    return db.collection<Products>("products");
  }
}
