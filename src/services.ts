import axios from "axios";
import { Character } from "./types";

export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await axios.get("https://rickandmortyapi.com/api/character");
  return response?.data?.results || [];
};