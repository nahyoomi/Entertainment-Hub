import axios from 'axios';
import React, { useState, useEffect } from 'react';
import  SingleContent  from '../../components/SingleContent/SingleContent';
import './Trending.css';
import CustomPagination from '../../components/Pagination/CustomPagination';

function Trending() {
  const [ content, setContent ] = useState([]);
  const [ page, setPage ] = useState(1);

  const numDecimal = (num) => {
     const voteDecimal = num.toFixed(1);
     return voteDecimal;
  }

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_APPI_KEY}&page=${page}`
    );
    console.log(data.results)
    setContent(data.results);
  };
  
  useEffect(() => {
    fetchTrending();
  }, [page])
  
  
  return (
    <div>
      <span className='pageTitle'>Trending</span>
        <div className='trending'>
          {content && content.map((c) => (
            <SingleContent 
              key={c.id} 
              id={c.id} 
              poster={c.poster_path} 
              title={c.title || c.name} 
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={numDecimal(c.vote_average)}  
            />
          ))}  
        </div>
        <CustomPagination setPage={setPage}/>
    </div>
  )
}

export default Trending