import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden h-auto w-96 pb-6" ref={emblaRef}>
      <div className="embla__container flex items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="embla__slide flex-grow-0 flex-shrink-0 basis-full mx-0"
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          className="embla__prev border-slate-400 border-solid border opacity-40 p-4 rounded-full"
          onClick={scrollPrev}
        ></button>
        <button
          className="embla__next border-slate-400 border-solid border opacity-40 p-4 rounded-full"
          onClick={scrollNext}
        ></button>
      </div>
    </div>
  );
};

export default EmblaCarousel;

/*

*/
