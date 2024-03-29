import styles from "./MainCarousel.module.scss";

import { Carousel } from "react-bootstrap";

export default function MainCarousel({ interval, carouArr }) {
  return (
    <Carousel interval={interval}>
      {carouArr.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className={`d-block ${styles.fitSize} ${styles.opacity}`}
            src={item.imgSrc}
            alt="추가예정"
          />
          <Carousel.Caption>
            <h3>{item.text}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
/* <Carousel.Item>
        <img className="d-block w-100 h-73" src={carouArr.imgSrc} alt="First slide" />
        <Carousel.Caption>
          <h3>{carouArr.text}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-73" src="" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-73"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */
