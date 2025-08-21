// src/pages/Home.jsx
import React from "react";
import AutoCarousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <AutoCarousel />
      <ProductCard />
      <AutoCarousel />
      <ProductCard />
    </>
  );
}
