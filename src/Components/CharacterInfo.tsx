import { Character } from "../types";
import { ImageWrapper } from "../styles";
import { Card, CardBody, Title, Text } from "@razorpay/blade/components";

type CharacterInfo = {
  character: Character;
};

const CharacterInfo = ({ character }: CharacterInfo): JSX.Element => {
  return (
    <Card surfaceLevel={3} marginBottom="spacing.5">
      <CardBody>
        <ImageWrapper imageUrl={character.image} />
        <Title size="small">{character.name}</Title>
        <Text>Status: {character.status}</Text>
        <Text>Location: {character.location.name}</Text>
        <Text>First Seen in: {character.origin.name}</Text>
        <Text>Gender: {character.gender}</Text>
        <Text>Species: {character.species}</Text>
      </CardBody>
    </Card>
  );
};

export default CharacterInfo;
