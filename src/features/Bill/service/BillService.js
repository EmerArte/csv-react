import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export async function getBills(page) {
  try {
    const response = await axios.get(API_URL + "/list?page=" + page);
    return { data: response.data.data.content, pages: response.data.data.size };
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error);
    }
  }
}
export async function rejectBill(id) {
  try {
    const response = await axios.patch(API_URL + "/reject/" + id);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error);
    }
  }
}


export default {
  getBills,rejectBill
};