/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
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
        <div key={i}>
          <img
            src={src}
            alt="slides"
            className="bg-lavender-black bg-opacity-30"
          />
        </div>
      ))}
    </Carousel>
  )
}