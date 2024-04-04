"use client";
import Footer from "@/components/Footer";
import { ObjectId } from "mongodb";
import { useEffect, useState } from "react";
import CardWishlist from "@/components/CardWishlist";

interface Product {
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
}

interface Wishlist {
  _id: string;
  userId: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
  productDetails: Product;
}

interface ArrayOfWishlist {
  data: Wishlist[];
}

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<Wishlist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`, {
          method: "GET",
          headers: {},
        });

        if (!response.ok) {
          throw new Error("Failed to fetch wishlist items");
        }

        const data = await response.json();

        setWishlistItems(data);
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlistItems();
  }, []);

  const handleRemoveItem = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item._id !== id));
  };

  return (
    <>
      <main>
        <h1 className="text-4xl font-bold text-center my-2 mt-14">My Wishlist</h1>
        <h1 className="text-small text-center">Refresh to see an updated wishlist</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col space-y-4 overflow-auto max-h-[90vh]">
            {wishlistItems &&
              wishlistItems.map((item, index) => (
                <CardWishlist key={index} product={item.productDetails} _id={item._id} onRemove={handleRemoveItem} />
              ))}
          </div>
        )}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default WishlistPage;