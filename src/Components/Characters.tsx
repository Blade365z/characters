import { useQuery } from "react-query";
import { fetchCharacters } from "services";
import { Spinner } from "@razorpay/blade/components";
import { ChractersContainer } from "styles";
import CharacterInfo from "Components/CharacterInfo";

const Characters = (): JSX.Element => {
  const { data: characterList, isLoading } = useQuery(
    "characters",
    () => fetchCharacters({ page: 0 }),
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
            <CharacterInfo key={character.name} character={character} />
          ))}
          <button>sdsd</button>
        </ul>
      )}
    </ChractersContainer>
  );
};

export default Characters;
