import type CarouselItem from "../models/CarouselItems";

function CarouselDefault({ details }: { details?: CarouselItem[] }) {
  return (
    <div className="carousel w-full">
      {details?.map((item, index) => {
        let next = (index + 1) % details.length;
        let prev = (index - 1 + details.length) % details.length;
        return (
          <div
            key={index}
            id={"slide" + index}
            className="carousel-item relative w-full"
          >
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
            <p>{item.description}</p>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={"#slide" + prev} className="btn btn-circle">
                ❮
              </a>
              <a href={"#slide" + next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CarouselDefault;
