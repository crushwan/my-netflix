"use client";
import { useEffect, useState } from "react";
import instance from "@/lib/axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/";

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="text-white ml-5 font-semibold">
      <h2>{title}</h2>

      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar-hide">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`max-h-24 object-contain mr-3 w-full transition-all duration-500 hover:scale-110 hover:shadow-lg ${
                  isLargeRow && "max-h-64 hover:scale-110 "
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow
                    ? "w185/" + movie.poster_path
                    : "w300/" + movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
