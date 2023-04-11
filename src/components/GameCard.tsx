import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  games: Games;
}
const GameCard = ({ games }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(games.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={games.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={games.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;