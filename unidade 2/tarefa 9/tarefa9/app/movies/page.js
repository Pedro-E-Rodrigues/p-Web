export default async function Home({ searchParams }) {
    const { titleSearchKey = 'bagdad' } = await searchParams;
  
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=f692d508&s=${titleSearchKey}&type=movie`
    );
  
    const data = await res.json();
  
    return (
      <div>
        <div>
          {/* Exibir título, ano e poster do filme */}
          {data.Search.map((m) => (
            <div key={m.imdbID} style={{ marginBottom: '20px' }}>
              <h3>{m.Title} --- {m.Year}</h3>
              <img src={m.Poster} alt={`${m.Title} Poster`} style={{ width: '200px' }} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  