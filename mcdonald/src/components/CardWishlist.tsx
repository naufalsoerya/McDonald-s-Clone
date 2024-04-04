'use-client'
import React from "react";
import { Product } from "@/types";
import RemoveFromWishlistButton from "./RemoveWishlist";

const WishlistCard = ({ product, _id }: {product: Product, _id: string, onRemove: (id: string) => void}) => {
  
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex items-center py-4">
        <img
          className="h-24 w-24 object-cover mr-4"
          src={product.thumbnail}
          alt={product.name}
        />
        <div>
          <div className="font-bold text-lg mb-1">{product.name}</div>
          <p className="text-gray-700 text-sm mb-2">{product.description}</p>
          <div className="flex flex-wrap">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
             <RemoveFromWishlistButton wishlistId ={_id}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard
