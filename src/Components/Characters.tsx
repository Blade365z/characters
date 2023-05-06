import { useQuery } from "react-query";
import { fetchCharacters } from "../services";
import { Spinner } from "@razorpay/blade/components";
import { ChractersContainer } from "../styles";
import CharacterInfo from "./CharacterInfo";

const Characters = (): JSX.Element => {
  const { data: characterList, isLoading } = useQuery(
    "characters",
    fetchCharacters,
    {
      staleTime: Infinity,
    }
  );

  return (
    <ChractersContainer>
      {isLoading ? (
        <Spinner size="xlarge" accessibilityLabel="character-loader" />
      ) : (
        <ul>
          {characterList?.map((character) => (
            <CharacterInfo character={character} />
          ))}
        </ul>
      )}
    </ChractersContainer>
  );
};

export default Characters;
