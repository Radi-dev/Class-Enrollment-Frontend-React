import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YoutubeEmbed from "./YoutubeEmbed";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const Cacarousel = ({ images, video }) => (
  <div className=" m-10 rounded-lg overflow-hidden border-gray-800">
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {video ? (
        <div className=" h-full  border-gray-500 mx -1 ">
          <YoutubeEmbed embedId={video} className="rounded-lg" />
        </div>
      ) : null}
      {images.map((image, i) => (
        <div key={i} className=" h-52 mx-1  ">
          <img
            src={image.photo}
            alt="img"
            className="mx-auto w-full border-gray-500 border h-full object-cover rounded-lg "
          />
        </div>
      ))}
    </Carousel>
  </div>
);
