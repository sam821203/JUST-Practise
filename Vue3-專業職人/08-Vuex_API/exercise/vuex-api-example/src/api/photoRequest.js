import axios from "axios";

const photoRequest = axios.create({
  baseURL: "https://vue-lessons-api.vercel.app/",
});

export const getPhotoRequest = () => photoRequest.get("photo/list");
