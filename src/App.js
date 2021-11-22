import { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/SearchBox.js';
import Movie from './components/Movie.js';
import MovieCard from './components/MovieCard';
import Filters from './components/Filters';
import logo from './assets/MovieApp.png';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [currentMovieID, setCurrentMovieID] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [year, setYear] = useState('');

  const getMovieRequest = async () => {
    const url = `//www.omdbapi.com/?s=${searchValue}&type=${typeValue}&y=${year}&apikey=fe1b8706`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue, typeValue, year]);

  useEffect(() => {
    console.log(currentMovieID);
  }, [currentMovieID]);

  useEffect(() => {
    console.log(year);
  }, [year]);

  return (
    <div className='App bg-primary min-h-screen overflow-hidden'>
      <div className='header py-8 bg-gradient-to-b from-black '>
        <div className='container mx-auto'>
          <div className='flex flex-row  justify-between items-center w-full'>
            <img className='w-24' src={logo} />
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <Filters
              currentType={(type) => setTypeValue(type)}
              currentYear={(year) => setYear(year)}
            />
          </div>
        </div>
      </div>
      <div className='body my-auto container mx-auto'>
//         <div className='watch-list mt-5 h-1/5'>
//           <h2 className='text-2xl font-semibold text-light'>Watch List</h2>
//           <div className='py-14'>
//             <div className='flex justify-center'>
//               <svg
//                 xmlns='http://www.w3.org/2000/svg'
//                 className='h-20 w-20 text-gray-400'
//                 fill='none'
//                 viewBox='0 0 24 24'
//                 stroke='currentColor'
//               >
//                 <path
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth={2}
//                   d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
//                 />
//               </svg>
//             </div>
//             <p className='text-3xl font-semibold text-gray-400 t,ext-center '>
//               Watch List is Empty
//             </p>
//           </div>
//         </div>
        <div className='movie-list h-4/5'>
          <h2 className='text-2xl font-semibold text-light my-5'>Movie List</h2>
          <div className='flex'>
            <div className='border-r-2 w-1/4 overflow-y-auto h-96 px-2 '>
              {movies.length !== 0 ? (
                movies.map((movie, index) => (
                  <Movie
                    current={(movieID) => setCurrentMovieID(movieID)}
                    movie={movie}
                  />
                ))
              ) : (
                <div className='flex items-center'>
                  <h1 className='text-sm font-semibold text-light my-5'>
                    No movies found.
                  </h1>
                </div>
              )}
            </div>
            <div className='w-3/4'>
              {currentMovieID !== '' && (
                <MovieCard currentID={currentMovieID} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
