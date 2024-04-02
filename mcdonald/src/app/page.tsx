import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Component NavBar */}
      <NavBar />

      {/* Carousel */}
      <div className="carousel w-full h-64 carousel-center box">
        <div className="carousel-item">
          <img
            src="https://d2vuyvo9qdtgo9.cloudfront.net/promos/June2022/jR9u1QhFGku4ru60QhN5.jpg"
            alt="Promo-1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://d2vuyvo9qdtgo9.cloudfront.net/promos/August2022/QIUEnOkYq1zTG354ZaqS.jpg"
            alt="Promo-2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://d2vuyvo9qdtgo9.cloudfront.net/promos/August2023/wff6zUYmkHwxsOw4lfoS.png"
            alt="Pizza"
          />
        </div>
      </div>
    </>
  );
}
