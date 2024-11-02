import React,{useState} from 'react'
import {movies} from './data.js'

const Movies=()=>{
    const [movieList,setMovieList]=useState(movies);
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'2rem',textAlign:'center',width:'1200px',margin:'auto'}}>
           {movieList.map((data)=>(
            <div key={data.id} style={{ maxWidth: "280px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
           ))} 
        </div>
    )
}

export default Movies;