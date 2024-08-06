import axios from "axios";

const fetchPhotos = async (query, page = 1, per_page = 5) => {
  const accessKey = "p3EuGko1UM4oNESOhf8hWeXfV-sBrGtjt_aGKFLspYw";
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: query,
      page,
      per_page,
    },
  });
  return response.data;
};

export default fetchPhotos;
