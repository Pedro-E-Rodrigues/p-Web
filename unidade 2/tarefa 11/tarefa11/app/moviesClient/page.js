'use client';
import { useState } from 'react';

export default function MoviesClient() {
  const [titleSearchKey, setTitleSearchKey] = useState('');
  const [yearSearchKey, setYearSearchKey] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    const query = new URLSearchParams({
      titleSearchKey,
      yearSearchKey,
    }).toString();

    const response = await fetch(`/api/movieSearch?${query}`);
    const data = await response.json();

    setMovies(data.Search || []);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            id="title"
            type="text"
            value={titleSearchKey}
            onChange={(e) => setTitleSearchKey(e.target.value)}
            placeholder="Digite o título do filme"
          />
        </div>
        <div>
          <label htmlFor="year">Ano:</label>
          <input
            id="year"
            type="number"
            value={yearSearchKey}
            onChange={(e) => setYearSearchKey(e.target.value)}
            placeholder="Digite o ano (ex.: 2000)"
          />
        </div>
        <button type="submit">Pesquisar</button>
      </form>

      <div>
        <h2>Resultados:</h2>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} style={{ marginBottom: '20px' }}>
              <h3>
                {movie.Title} --- {movie.Year}
              </h3>
              <img
                src={movie.Poster}
                alt={`${movie.Title} Poster`}
                style={{ width: '200px' }}
              />
            </div>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
}
