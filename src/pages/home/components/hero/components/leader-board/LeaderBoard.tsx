import { FC } from "react";
import styled from "styled-components";
import { Flex } from "app/components/Flex";
import BMWIcon from "app/assets/BMWIcon.svg";
import {
  LeaderBoardItem,
  LeaderBoardItemPropsType,
} from "./components/LeaderBoardItem";
import { Button } from "app/components/Button";
import { Link } from "react-router-dom";

const LeaderBoardContainer = styled(Flex)`
  background-color: var(--color-surface-secondary);
  padding: 30px 25px;
  height: 100%;
  border-radius: 10px;
  opacity: 0.9;
`;
const LeaderBoardTitle = styled.p`
  font-size: var(--fontSize-header);
  color: var(--color-text-primary);
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.75px;
  margin-top: 10px;
`;
const LeaderBooardItemsContainer = styled(Flex)`
  width: 100%;
  margin: 25px 0;
`;

type LeaderBoardPropsType = {
  leaderBoardItems: LeaderBoardItemPropsType[];
};

export const LeaderBoard: FC<LeaderBoardPropsType> = ({ leaderBoardItems }) => {
  return (
    <LeaderBoardContainer
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <img width="85px" height="85px" src={BMWIcon} alt="BMW" />
      <LeaderBoardTitle>BMW Indoor Championship</LeaderBoardTitle>
      <LeaderBooardItemsContainer flexDirection="column">
        {leaderBoardItems.map((leaderBoardItem) => (
          <LeaderBoardItem
            key={leaderBoardItem.id}
            id={leaderBoardItem.id}
            playerPosition={leaderBoardItem.playerPosition}
            playerName={leaderBoardItem.playerName}
            playerscore={leaderBoardItem.playerscore}
          />
        ))}
      </LeaderBooardItemsContainer>
      <Link to="/courses">
        <Button>Show More Courses</Button>
      </Link>
    </LeaderBoardContainer>
  );
};
