import axios from "axios"
import { useEffect } from "react";

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage,
    type,
}) => {

    const fetchGenres = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_APPI_KEY}&language=en-US`
        );
        setGenres(data.genres);
    };
    console.log(genres)

   useEffect(() => {
    fetchGenres();

    return () => {
        setGenres({});
    };
    
   }, [])
    

    return (
        <h1>Hola soy un genero</h1>
    )
}

export default Genres;
