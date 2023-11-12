import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Custom.module.css";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR&include_image_language=pt-BR`;
    getMovie(movieUrl);
  }, []);

  console.log(movie);

  if (movie)
    return (
      <>
        <Container id="containerDetails" className={styles.moviePage}>
          <div
            className={styles.bgContainer}
            style={{
              backgroundImage: `url(${imageURL + movie.backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          {movie && (
            <>
              <Image
                className={styles.imagePoster}
                src={imageURL + movie.poster_path}
                thumbnail
              />
              <div className={styles.divFlexDirection}>
                <h1>{movie.title}</h1>
                <div className={styles.containerInfoGenres}>
                  <Stack direction="horizontal" gap={2}>
                    {movie.genres.map((item) => (
                      <Badge bg="dark">{item.name}</Badge>
                    ))}
                  </Stack>
                </div>
                <p className={styles.tagline}>{movie.tagline}</p>
                <div className={styles.infoDescription}>
                  <h3>Descrição:</h3>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </>
          )}
        </Container>
        <Container className={styles.infoSession}>
          <div className={styles.containerInfo}>
            {movie.budget ? (
              <div className={styles.info}>
                <h5>Orçamento</h5>
                <p>{movie.budget}</p>
              </div>
            ) : (
              ""
            )}
            <div className={styles.info}>
              <h5>Receita</h5>
              <p>{movie.revenue}</p>
            </div>
            <div className={styles.info}>
              <h5>Duração</h5>
              <p>{movie.runtime} minutos</p>
            </div>
          </div>
        </Container>
      </>
    );
};

export default Details;
