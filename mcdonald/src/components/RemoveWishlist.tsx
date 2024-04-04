'use client'
import React from 'react';
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';

interface RemoveProps {
  wishlistId: string;
}

const RemoveWishlist: React.FC<RemoveProps> = ({ wishlistId }) => {
  const router = useRouter();

  const remove = async () => {
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
    <button onClick={remove} className="btn btn-outline btn-error">
      Remove from Wishlist
    </button>
  );
};

export default RemoveWishlist;