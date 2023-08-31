import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

export default function GifListContainer() {
  const [giphys, setGiphys] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=bmNvfTK2wKZl8h3TcD7rF1Lu46zHNfej&rating=g`
    )
      .then((res) => res.json())
      .then((data) => setGiphys(data.data.slice(0, 3)));
  }, [search]);

  function handleSubmit(e, search) {
    e.preventDefault();
    setSearch(search);
  }

  return (
    <>
     <GifSearch handleSubmit={handleSubmit} />
      <GifList giphys={giphys} />
    </>
  );
}
