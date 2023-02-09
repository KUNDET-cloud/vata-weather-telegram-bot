import axios from "axios";

export const getLocation = async (location) => {
  const config = {
    params: {
      q: location,
      key: process.env.WHEATHER_API_KEY,
    },
  };
  let response = await axios.get(GET_LOCALITY_URL, config);
  return response.data[0];
};
