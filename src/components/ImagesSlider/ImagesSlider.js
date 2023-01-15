import styles from "./ImagesSlider.module.scss";
import { sampleImages } from "../../assets/sample-images";
import CloseIcon from "../UI/SVG/CloseIcon";
import ChevronLeftIcon from "../UI/SVG/ChevronLeftIcon";
import useModalIsOpen from "../../custom-hooks/useModalIsOpen";

const ImagesSlider = function () {
  useModalIsOpen();
  const {
    slider,
    slider__Nav,
    slider__Nav__CloseBtn,
    slider__ImageNum,
    slider__Slider,
    slider__Slider__Image,
    slider__Slider__BtnLeft,
    slider__Slider__BtnRight,
    slider__Description,
  } = styles;
  return (
    <div className={slider}>
      <nav className={slider__Nav}>
        <button className={slider__Nav__CloseBtn}>
          <CloseIcon />
        </button>
        <span className={slider__ImageNum}>27/51</span>
      </nav>
      <div className={slider__Slider}>
        <button className={slider__Slider__BtnLeft}>
          <ChevronLeftIcon />
        </button>
        <div className={slider__Slider__Image}>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-581480098379191226/original/80efcfcd-b88f-4b09-bb33-80e12f537cf5.jpeg?im_w=960"
            alt="sample"
          />
        </div>
        <button className={slider__Slider__BtnRight}>
          <ChevronLeftIcon />
        </button>
      </div>
      <footer className={slider__Description}>
        <p>
          The surrounding hills and paddy fields as seen from our Balai with
          Gunung Raya, the highest peak in Langkawi.
        </p>
      </footer>
    </div>
  );
};

export default ImagesSlider;
