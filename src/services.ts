import axios from "axios";
import { Character } from "./types";

export const fetchCharacters = async ({ page = 0 }): Promise<Character[]> => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return response?.data?.results || [];
};
