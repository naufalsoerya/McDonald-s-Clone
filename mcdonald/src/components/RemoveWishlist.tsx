'use client'
import React from 'react';
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';

interface RemoveFromWishlistButtonProps {
  wishlistId: string;
}

const RemoveFromWishlistButton: React.FC<RemoveFromWishlistButtonProps> = ({ wishlistId }) => {
  const router = useRouter();

  const removeFromWishlist = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: wishlistId }), 
      });

      if (!response.ok) {
        throw new Error('Failed to remove item from wishlist');
      }
      redirect('/wishlist');
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
    }
  };

  return (
    <button onClick={removeFromWishlist} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors">
      Remove from Wishlist
    </button>
  );
};

export default RemoveFromWishlistButton;