// import { Carousel } from "@material-tailwind/react";

// function CarouselDefault({ details }: { details: any[] }) {
//   return (
//     <Carousel
//       className="rounded-xl"
//       placeholder=""
//       onPointerEnterCapture={() => {}}
//       onPointerLeaveCapture={() => {}}
//       onResize={undefined}
//       onResizeCapture={undefined}
//     >
//       {details.map((item, index) => (
//         <img
//           key={index}
//           src={
//             item.image ||
//             "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//           }
//           alt={item.alt || `image ${index + 1}`}
//           className="h-full w-full object-cover"
//         />
//       ))}
//     </Carousel>
//   );
// }

// export default CarouselDefault;

import { Carousel } from "flowbite-react";

function CarouselDefault() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        <img
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
        />
      </Carousel>
    </div>
  );
}

export default CarouselDefault;
