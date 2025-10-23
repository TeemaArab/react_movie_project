import MovieCard from "../components/MovieCard"
import {useState} from "react"

function Home(){

     const [searchQuery, setSearchQuery] = useState("");
     const movies =[
    {id: 1,title: "Inception", release_date: "2010"},
    {id: 2, title: "GodFather", release_date: "1972"},
    {id: 3, title: "Pride & Prejudice", release_date: "2005"},
    {id: 4, title: "Seperation", release_date: "2012"},
    {id: 5, title: "Saw", release_date: "2004"}
];
const handleSearch = (e) =>{
    e.preventDefault();
  alert(searchQuery);
  setSearchQuery("");

}

    return (
    <div className= "home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for a movie..."
             className="search-input"
             value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                
                (<MovieCard movie={movie} key={movie.id}/>)
            ))}
        </div>
    </div>
    );
   
}
export default Home;