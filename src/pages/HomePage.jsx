import { useEffect, useState } from "react";
import { fetchNowShowing } from "../services/movieApi";
import MovieCard from "../components/movieCard";
import Header from "../components/header";
import SideBar from "../components/SideBar";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("ALL");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchNowShowing();
      setMovies(data.films || []);
    };

    loadMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const searchMatch = movie.film_name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const movieRating = movie.age_rating?.[0]?.rating
      ?.trim()
      ?.toUpperCase();

    return (
      searchMatch &&
      (ratingFilter === "ALL" ||
        movieRating === ratingFilter)
    );
  });

  return (
    <div className="min-h-screen bg-blue-200">
      <Header />

      <div className="flex">
        <SideBar
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        <main className="flex-1 p-6">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-lg px-4 py-3 border rounded-xl shadow-sm mb-8"
          />

          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.film_id}
                movie={movie}
                viewMode={viewMode}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;