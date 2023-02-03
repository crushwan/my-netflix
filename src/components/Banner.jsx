"use client";
import { useEffect, useState } from "react";
import requests from "@/lib/Requests";
import instance from "@/lib/axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  // console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="relative object-contain text-white h-[448px]"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center 40%",
      }}
    >
      <div className="ml-8 pt-36 h-48">
        <h1 className="text-5xl font-extrabold pb-2">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="">
          <button
            className="cursor-pointer text-white outline-none border-none font-bold border-[0.2vw]
        px-8 mr-4 py-2 bg-[#333333]/70 hover:text-black hover:bg-[#e6e6e6] transition-all duration-200"
          >
            Play
          </button>
          <button
            className="cursor-pointer text-white outline-none border-none font-bold border-[0.2vw]
        px-8 mr-4 py-2 bg-[#333333]/70 hover:text-black hover:bg-[#e6e6e6] transition-all duration-200"
          >
            My List
          </button>
        </div>
        <h1 className="leading-5 pt-4 text-sm max-w-sm h-20 drop-shadow-md shadow-black/50">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="bg-gradient-to-b from-transparent via-[#141414]/70 to-[#141414] h-28 absolute left-0 right-0 bottom-0" />
    </header>
  );
}

export default Banner;
