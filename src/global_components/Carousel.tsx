import { Carousel } from "flowbite-react";

function CarouselDefault({ details }: { details?: any[] }) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 py-5 overflow-hidden">
      <Carousel slide={true} slideInterval={3000} pauseOnHover>
        {details?.map((d, i) => {
          return (
            <div
              key={i}
              className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 text-white text-2xl font-bold"
            >
              {d.desciption}
            </div>
          );
        })}
        {/* <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        /> */}
      </Carousel>
    </div>
  );
}

export default CarouselDefault;
