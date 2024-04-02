import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Component NavBar */}
      <NavBar />

      {/* Carousel */}
      <Carousel />

      {/* Products */}
      <div>
        <h1 className="text-center text-gray-800 text-3xl font-bold mt-10 mb-10">Menu Favorit</h1>
        <Card />
      </div>
    </div>
  );
}
