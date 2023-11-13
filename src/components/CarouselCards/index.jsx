import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Col from "react-bootstrap/Col";
import Cards from "../Card";
import styles from "./Custom.module.css";
import { Container } from "react-bootstrap";
import useFetch from "../Api/useFetch";
import Log from "../Spinner";

const apiKey = import.meta.env.VITE_API_KEY;

const CarouselCards = ({ URL, idSession, type }) => {
  const [topMovies, setTopMovies] = useState([]);
  const { request, data, error, loading } = useFetch();

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

  useEffect(() => {
    request(
      `${URL}top_rated?${apiKey}&language=pt-BR&include_image_language=pt-BR`
    );

    if (data) setTopMovies(data.results);
  }, [loading]);

  if (data === null && loading === null) return null;
  return (
    <>
      <Container className={styles.containerCustom} id={idSession}>
        <Slider {...settings}>
          {topMovies.map((movie) => {
            return (
              <Col key={movie.id}>
                {loading ? (
                  <Log />
                ) : (
                  <Cards title={movie.title} movie={movie} cardType={type} />
                )}
              </Col>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};

export default CarouselCards;
