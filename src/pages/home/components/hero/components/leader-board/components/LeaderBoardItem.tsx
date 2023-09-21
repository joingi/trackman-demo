import { FC } from "react";
import styled from "styled-components";
import { Flex } from "../../../../../../../components/Flex";

export type LeaderBoardItemPropsType = {
  id: number;
  playerPosition: string;
  playerName: string;
  playerscore: number;
};

const LeaderBoardItemContainer = styled(Flex)`
  color: var(--color-text-primary);
  font-size: var(--fontSize-body-text);
  background-color: var(--color-box-secondary);
  padding: 13px 23px;
  border-bottom: 1px solid var(--color-details-secondary);
  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  &:last-child {
    border-bottom: none;
    border-radius: 0 0 10px 10px;
  }
`;

const PlayerScore = styled.div`
  padding: 3px 20px;
  background-color: var(--color-orange-primary);
  border-radius: 3px;
  flex: 1;
`;
const StyledPlayerName = styled.p`
  width: 260px;
  flex-shrink: 0;
`;

const StyledPlayerPosition = styled.p`
  flex: 1;
`;

export const LeaderBoardItem: FC<LeaderBoardItemPropsType> = ({
  playerPosition,
  playerName,
  playerscore,
}) => {
  return (
    <LeaderBoardItemContainer gap="20px" alignItems="center">
      <StyledPlayerPosition>{playerPosition}</StyledPlayerPosition>
      <StyledPlayerName>{playerName}</StyledPlayerName>
      <PlayerScore>{playerscore}</PlayerScore>
    </LeaderBoardItemContainer>
  );
};
