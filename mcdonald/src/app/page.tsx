import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import NavBarHome from "@/components/NavBarHome";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* NavBar */}
      <NavBarHome />

      {/* Carousel */}
      <Carousel />

      {/* Products */}
      <div>
        <h1 className="text-center text-gray-800 text-3xl font-bold mt-10 mb-10">
          Menu Favorit
        </h1>
        <Card />
        <div className="text-center">
          <Link href="/products">
            <button className="btn btn-wide mt-10 bg-red-600 hover:bg-red-700 ml-16">
              <h6 className="text-gray-100">Lihat Semua Menu</h6>
            </button>
          </Link>
        </div>
      </div>

      {/* Banner */}
      <Banner />
      <Footer />
    </div>
  );
}
