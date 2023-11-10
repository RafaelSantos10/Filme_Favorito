import CarouselCards from "../../components/CarouselCards";
import GridProviders from "../../components/GridProviders";
import HeadersPoster from "../../components/HeaderPost";

const Home = () => {
  const moviesURL = import.meta.env.VITE_API;
  const seriesURL = import.meta.env.VITE_TV_SERIES;
  return (
    <>
      <HeadersPoster  id='start'/>
      <CarouselCards URL={moviesURL} idSession={'topMovies'}/>
      <GridProviders />
      <CarouselCards URL={seriesURL} idSession={'topSeries'}/>
     
    </>
  );
};

export default Home;
