import { Flex } from "app/components/Flex";
import { FC } from "react";
import styled from "styled-components";

export type CoursePropsType = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  onClickHandler: () => void;
};

const StyledCourseItem = styled.div`
  border-radius: 8px;
  background-color: var(--colors-box-primary);
  cursor: pointer;
`;

const StyledCourseImage = styled.img`
  width: 100%;
  height: 292px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  object-position: center;
`;

const StyledCourseTitle = styled.div`
  font-size: var(--fontSize-nav-text);
  color: var(--color-text-primary);
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCourseDescription = styled.p`
  font-size: var(--fontSize-body-text);
  color: var(--color-text-primary);
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CourseInformationContainer = styled(Flex)`
  padding: 25px 31px;
  height: 153px;
  display: inline-grid;
  gap: 10px;
  width: 100%;
`;

export const CourseItem: FC<CoursePropsType> = ({
  // id,
  title,
  description,
  thumbnail,
  onClickHandler,
}) => {
  return (
    <StyledCourseItem onClick={onClickHandler}>
      <StyledCourseImage src={thumbnail} alt={title} />
      <CourseInformationContainer>
        <StyledCourseTitle>{title}</StyledCourseTitle>
        <StyledCourseDescription>{description}</StyledCourseDescription>
      </CourseInformationContainer>
    </StyledCourseItem>
  );
};
