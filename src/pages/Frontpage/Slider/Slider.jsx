import Carousel from "react-material-ui-carousel";
import  ImageSlider  from "./ImageSlider.js";

const Item = (props) => {
    return (
      <img
        src={props.item.images}
        alt={props.item.title}
        className="slider-images"
      />
    );
  };
  
  const HeroSlider = () => {
    const carouselSettings = {
      animation: "fade",
      interval: 500,
      navButtonsAlwaysInvisible: true
    };
  
  
    return (
      <div className="slider-container">
        <Carousel {...carouselSettings}>
          {ImageSlider.map((data) => (
            <Item key={data.id} item={data} />
          ))}
        </Carousel>
      </div>
    );
  };
  
  // Exporter som named
  export { HeroSlider, Item };
  
