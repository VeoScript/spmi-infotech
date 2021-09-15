/* eslint-disable @next/next/no-img-element */
import { ImageSlides } from '~/mock'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function CarouselComponent() {
  return (
    <Carousel
      showThumbs={false}
      dynamicHeight={true}
      emulateTouch={true}
      infiniteLoop={true}
      showIndicators={false}
    >
      {ImageSlides.map(({ src }, i) => (
        <div className="flex h-full max-h-[20rem]" key={i}>
          <img
            src={src}
            alt="slides"
            className="object-cover bg-lavender-black bg-opacity-30"
          />
        </div>
      ))}
    </Carousel>
  )
}