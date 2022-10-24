import axios from 'axios';
import { useState, useEffect } from 'react';
import  SingleContent  from '../../components/SingleContent/SingleContent';
import Genres from '../../components/Genres';
import CustomPagination from '../../components/Pagination/CustomPagination';
import useGenres from '../../hooks/useGenre';


const Movies = () => {
  const [ page, setPage ] = useState(1);
  const [ content, setContent ] = useState([]);
  const [numOfPages, setnumOfPages] = useState();
  const [ selectedGenres, setSelectedGenres ] = useState([]);
  const [ genres, setGenres ] = useState();
  const genreforURL = useGenres(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APPI_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setnumOfPages(data.total_pages); 
  };

  const numDecimal = (num) => {
    const voteDecimal = num.toFixed(1);
    return voteDecimal;
 }

  useEffect(() => {
    fetchMovies();
  }, [genreforURL, page]);
  

  return (
    <div>
        <span className='pageTitle'>Movies</span>
        <Genres 
          type='movie'
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
        <span className='pageTitle'>Trending</span>
        <div className='trending'>
          {content && content.map((c) => (
            <SingleContent 
              key={c.id} 
              id={c.id} 
              poster={c.poster_path} 
              title={c.title || c.name} 
              date={c.first_air_date || c.release_date}
              media_type='movie'
              vote_average={numDecimal(c.vote_average)}  
            />
          ))}  
        </div>
        {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
        )}
    </div>
  )
}

export default Movies