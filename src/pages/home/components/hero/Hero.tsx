import { FC } from "react";
import { Container } from "../../../../components/Container";
import styled from "styled-components";
import { Flex } from "../../../../components/Flex";
import { LeaderBoard } from "./components/leader-board/LeaderBoard";

const StyledHeroContainer = styled(Flex)`
  background-image: url("./HeroImage.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 700px;
  padding: 10px;
`;

const leaderBoardItems = [
  {
    id: 1,
    playerPosition: "1",
    playerName: "Tiger Woods",
    playerscore: -9,
  },
  {
    id: 2,
    playerPosition: "2",
    playerName: "Tiger Woods",
    playerscore: -9,
  },
  {
    id: 3,
    playerPosition: "3",
    playerName: "Tiger Woods",
    playerscore: -9,
  },
  {
    id: 4,
    playerPosition: "3",
    playerName: "Tiger Woods",
    playerscore: -9,
  },
];

export const Hero: FC = () => {
  return (
    <StyledHeroContainer alignItems="center">
      <Container>
        <Flex justifyContent="center" alignItems="center">
          <LeaderBoard leaderBoardItems={leaderBoardItems} />
        </Flex>
      </Container>
    </StyledHeroContainer>
  );
};
