import {useSearch}  from '../../context/SearchContext';
import './SearchResults.css'
function SearchResults() {
  const {results, flag, loading} = useSearch();
  const base_url = "https://image.tmdb.org/t/p/original"
  console.log(results, flag);
  return(
    <div className='search-results'>
      {loading && <p>loading...</p>}
      {/* {flag && results.map((movie) => {
        return(        
          <div key={movie.id} className="movie-card">
            <img src={`${base_url}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
          </div>
        )

      })} */}
      {flag && 
        (results.length > 0 ? (
          results.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`${base_url}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
            </div>
          ))
        ) : (
          <h2 style={{paddingBottom: "300px", paddingTop: "300px", textAlign: "center"}}>No result found!!!</h2>
        )
      )}
    </div>
  )

}

export default SearchResults;


//  context api 
//  way to create a global parent 
//  way create global state
//  way to provide the values to children
//  way to use these value in the components

