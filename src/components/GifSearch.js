import React, { useState } from "react";

export default function GifSearch({ handleSubmit }) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, search)}>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search for GIFs"
      />
      <button type="submit">Search</button>
    </form>
  );
}