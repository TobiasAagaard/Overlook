import Carousel from "react-material-ui-carousel";
import  ImageSlider  from "./ImageSlider.js";
import Styles from "./Slider.module.scss";

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
      interval: 1500,
      indicatorContainerProps: true,
      indicators: false
     
    };
  
  
    return (
      <div className={Styles.sliderContainer}>
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
  
