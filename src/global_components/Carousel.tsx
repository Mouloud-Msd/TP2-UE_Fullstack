// import { Carousel } from "flowbite-react";
// import type CarouselItem from "../models/CarouselItems";

function CarouselDefault() {
  return (
    <div className="carousel w-6xl mx-9">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

// function CarouselDefault({ details }: { details?: CarouselItem[] }) {
//   return (
//     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 py-5 overflow-hidden">
//       <Carousel slide={true} slideInterval={3000} pauseOnHover>
//         {details?.map((d, i) => {
//           return (
//             <div
//               key={i}
//               className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 text-white text-2xl font-bold"
//             >
//               {d.description}
//             </div>
//           );
//         })}
//         {/* <img
//           src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
//           alt="..."
//         />
//         <img
//           src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
//           alt="..."
//         />
//         <img
//           src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
//           alt="..."
//         />
//         <img
//           src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
//           alt="..."
//         />
//         <img
//           src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
//           alt="..."
//         /> */}
//       </Carousel>
//     </div>
//   );
// }

export default CarouselDefault;
