import styles from "./ImagesSlider.module.scss";
import ChevronLeftIcon from "../../../components/UI/SVG/ChevronLeftIcon";
import { Link } from "react-router-dom";

const ImagesSlider = function ({ images }) {
  const { slider, slider__ImagesContainer, slider__Image, slider__BackBtn } =
    styles;

  return (
    <div className={slider}>
      <Link className={slider__BackBtn}>
        <ChevronLeftIcon />
      </Link>
      <div
        className={slider__ImagesContainer}
        style={{
          gridTemplateColumns: `repeat(${images.length}, 1fr)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((img, index) => (
          <img
            src={img}
            alt={`Room preview no.${index + 1}`}
            className={slider__Image}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesSlider;
