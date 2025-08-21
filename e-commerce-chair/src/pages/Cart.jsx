import React from 'react'

export const Cart = () => {
  return (
    <div className="container mx-auto p-6 min-h-screen flex flex-col justify-start items-center">
      <h1 className="text-5xl font-bold mb-4">Cart</h1>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl flex flex-col items-center">
            <p className="mb-4">Your cart is currently empty.</p>
        <p className="mb-4">Browse our products and add items to your cart.</p>
        <p className="mb-4">Thank you for shopping with us!</p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Continue Shopping
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Checkout
            </button>
        </div>
    </div>
  )
}

export default Cart
