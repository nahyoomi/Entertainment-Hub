import React from 'react'
import { img_300, unavailable } from '../config/config';
import './SingleContent.css';

const SingleContent =({
    key,
    id, 
    poster,
    title, 
    date,
    media_type,
    vote_average,
}) => {
  return (
    <div className='media' >
        <img className='poster' src={poster ? `${img_300}/${poster}`:unavailable} alt={title} />
        <b className='title'>{title}</b>
        <span className="subtitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subtitle">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;

