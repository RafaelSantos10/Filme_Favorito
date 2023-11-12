import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Col from "react-bootstrap/Col";
import Cards from "../Card";
import styles from "./Custom.module.css";
import { Container } from "react-bootstrap";

const apiKey = import.meta.env.VITE_API_KEY;

const CarouselCards = ({ URL, idSession, type }) => {
  const [topMovies, setTopMovies] = useState([]);

  const settings = {
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${URL}top_rated?${apiKey}&language=pt-BR&include_image_language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <>
      <Container  className={styles.containerCustom} id={idSession}>
        <Slider {...settings}>
          {topMovies.map((movie) => {
            return (
              <Col key={movie.id} >
                <Cards title={movie.title} movie={movie} cardType={type}/>
              </Col>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};

export default CarouselCards;
