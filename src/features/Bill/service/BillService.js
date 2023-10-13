import axios from "axios";
export async function getBills(page) {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.get(API_URL + "/list?page=" + page);
    return { data: response.data.data.content, pages: response.data.data.size };
  } catch (error) {
    if (error.response) {
      return error.response.message;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error);
    }
  }
}
export default {
  getBills,
};