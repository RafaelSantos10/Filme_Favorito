import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Col from "react-bootstrap/Col";
import Cards from "../Card";
import styles from "./Custom.module.css";

const apiKey = import.meta.env.VITE_API_KEY;

const CarouselCards = ({URL}) => {
  const [topMovies, setTopMovies] = useState([]);

  const settings = {
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    getTopRatedMovies(topRatedUrl)
    
  }, []);


  return (
    <>
      <div className={styles.containerCustom}>
        <Slider {...settings}>
          {topMovies.map((movie) => {
            return (
              <Col key={movie.id} xs={6} md={2}>
                <Cards title={movie.title} movie={movie} />
              </Col>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default CarouselCards;
