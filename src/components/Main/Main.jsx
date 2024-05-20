import Row from "../Row";
import Banner from "../Banner";

import requests from "../../api/requests";
import { useSearch } from '../../context/SearchContext';

function Main() {
    const { flag } = useSearch();

    return(
        flag ? (<div></div>) :(
        <div>
            <Banner />
            <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />    
        </div>)
    )
}

export default Main;