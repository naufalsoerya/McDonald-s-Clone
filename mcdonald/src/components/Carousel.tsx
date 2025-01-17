import Link from "next/link";
import Image from "next/image";
import carousel1 from "../../assets/carousel1.jpg"
import carousel2 from "../../assets/carousel2.jpg"

export default function Carousel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-1/2">
          <Image
            alt="carousel1"
            src={carousel1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-1/2">
          <Image
            alt="carousel2"
            src={carousel2}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
