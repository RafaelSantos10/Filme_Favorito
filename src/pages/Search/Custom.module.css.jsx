import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Container } from "react-bootstrap";

import styles from "./Custom.module.css";
import Cards from "../../components/Card";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR&include_image_language=pt-BR`;
    console.log(searchWithQueryURL);
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  console.log(movies)
  return (
    <Container>
    
          <h2 className={styles.title}>
          Resultados para: <span className="query-text">{query}</span>
        </h2>
        <div className={styles.movies-container}>
          {movies &&
            movies.map((movie) => {
              if (movie.media_type !== "person") {
                return (
                  <>
                    <div className={styles.divCard} key={movie.id}>
                      <Cards key={movie.id} movie={movie} title={movie.title} cardType={movie.media_type}/>
                    </div>
                  </>
                );
              } 
            })}
        </div>
      
    </Container>
  );
};

export default Search;
