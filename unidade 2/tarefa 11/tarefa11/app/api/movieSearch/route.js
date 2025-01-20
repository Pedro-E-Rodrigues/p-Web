import movies from '@/data/movies.json';

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const titleSearchKey = searchParams.get('titleSearchKey') || '';
  const yearSearchKey = searchParams.get('yearSearchKey') || '';

  
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.Title.toLowerCase().includes(titleSearchKey.toLowerCase());
    const matchesYear = yearSearchKey ? movie.Year === yearSearchKey : true;
    return matchesTitle && matchesYear;
  });

  return Response.json({ Search: filteredMovies });
}
