import axios from "axios";
const BASE_URL = "https://api.unsplash.com/";
axios.defaults.baseURL = BASE_URL;
export const PER_PAGE = 12;
import { ResponseData } from "./types";
export const fetchPhotosNature = async (query: string, page: number) => {
  const { data } = await axios.get<ResponseData>(
    `search/photos?client_id=GeFITrV8DFeWscaKxGsNnTSljHaWCimvtyFeqkLzvgI&query=${query}&page=${page}&per_page=${PER_PAGE}&orientation=landscape`
  );
  return data;
};
