// 'use client'
import React from 'react';

interface AddToWishlistButtonProps {
  productId: Object;
}

const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({ productId }) => {
  const handleAddToWishlist = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add item to wishlist');
      }

      const result = await response.json();
      alert(result.message); 
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
      alert('Error');
    }
  };

  return (
    <button onClick={handleAddToWishlist} className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
      Add To Wishlist
    </button>
  );
};

export default AddToWishlistButton;