export default function GifList({ giphys }) {
    console.log(giphys)
  return (
    <ul>
      {giphys.map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt="gifs" />
        </li>
      ))}
        </ul>
        );
}
