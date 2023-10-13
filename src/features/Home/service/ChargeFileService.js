import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
export async function chargeFileService(file) {
  let bodyFormData = new FormData();
  bodyFormData.append("file", file);
  try {
    const response = await axios.post(API_URL + "/save", bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data
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
  chargeFileService,
};
