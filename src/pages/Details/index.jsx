import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR&include_image_language=pt-BR`;
    getMovie(movieUrl);
    
  }, []);

  console.log(`detalhes ${movie}`);

  return (
    <div className="movie-page">

      {movie && (
        
        <>
        <img src={imageURL + movie.backdrop_path} alt="" />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
               Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
               Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
