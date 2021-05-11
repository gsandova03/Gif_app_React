const key = "58BjLo5B7eX7VhLIoqQIp6xdzcJjGCzN";

export default function getGifs({ keyword = "" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyword}&limit=50&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { title, id, images } = image;
        const { url } = images.downsized_medium;

        return { title, id, url };
      });
      return gifs;
    });
}
