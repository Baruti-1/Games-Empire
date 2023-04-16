import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  games: Games;
}
const GameCard = ({ games }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(games.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={games.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={games.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{games.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
