// ProductCard.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const products = [
  { id: 1, name: "Chair 1", description: "Comfortable chair", price: 49.99, image: "/chair1.png" },
  { id: 2, name: "Chair 2", description: "Stylish chair", price: 59.99, image: "/chair2.png" },
  { id: 3, name: "Chair 3", description: "Ergonomic chair", price: 89.99, image: "/chair3.png" },
  { id: 4, name: "Chair 4", description: "Executive chair", price: 99.99, image: "/chair4.png" },
  { id: 5, name: "Chair 5", description: "Gaming chair", price: 129.99, image: "/chair5.png" },
  { id: 6, name: "Chair 6", description: "Outdoor chair", price: 39.99, image: "/chair6.png" },
  { id: 7, name: "Chair 7", description: "Gaming chair", price: 129.99, image: "/chair7.png" },
  { id: 8, name: "Chair 8", description: "Outdoor chair", price: 39.99, image: "/chair8.png" },
];

const ProductCard = () => {
    useEffect(()=>{
       AOS.init({
          duration: 1000,
          once: false,
          easing: 'ease-in-out',
       })
    },[])

  return (
    <section className="py-10 px-4">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-gray-600 mt-2">
          Explore our range of high-quality chairs designed for comfort and style.
        </p>
      </div>

      {/* Product Grid */}
     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6" >
  {products.map((product,index) => (
    <div
      key={product.id}
      className="rounded-2xl border-2 border-transparent bg-gradient-to-br from-pink-500 to-purple-500 p-[1px] 
                 hover:scale-105 transition-transform duration-300  cursor-pointer shadow-lg hover:shadow-xl"
                 data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-[4/4] object-contain p-1 bg-gradient-to-br from-pink-50 to-purple-50"
          />
          {/* Dots */}
          <div className="flex justify-center space-x-1 absolute bottom-2 w-full">
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600 ">{product.description}</p>
          <p className="font-semibold mt-2 text-gray-800">${product.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      
    </section>
  );
};

export default ProductCard;
