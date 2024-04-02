import { ObjectId } from "mongodb";
import { db } from "../config";
import { z } from "zod";

type Wishlists = {
  _id: ObjectId;
  userId: ObjectId; 
  productId: ObjectId; 
  createdAt: Date;
  updatedAt: Date;
};

const WishlistValidation = z.object({
  userId: z.string({
    required_error: "User ID cant be empty",
  }),
  productId: z.string({
    required_error: "Product ID cant be empty",
  }),
});

export default class Wishlist {
  static wishlistCollection() {
    return db.collection<Wishlists>("wishlists");
  }
}
