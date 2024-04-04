import { Wishlist } from '@/types'
import { db } from "../config";
import { z } from "zod";

const WishlistValidation = z.object({
  userId: z.string({
    required_error: "User ID cant be empty",
  }),
  productId: z.string({
    required_error: "Product ID cant be empty",
  }),
});

export default class WishlistModel {
  static wishlistCollection() {
    return db.collection<Wishlist>("wishlists");
  }
}
