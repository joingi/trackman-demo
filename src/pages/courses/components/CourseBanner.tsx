import { Button } from "app/components/Button";
import { Flex } from "app/components/Flex";
import { FC } from "react";
import styled from "styled-components";

const CourseBannerContainer = styled(Flex)`
  height: 630px;
  width: 100%;
  margin-bottom: 24px;
  position: relative;
`;

const StyledCourseBannerImage = styled.img`
  max-width: 830px;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

const StyledCourseInformationContainer = styled(Flex)`
  position: absolute;
  right: 124px;
  width: 500px;
  z-index: 111;
`;

const StykedCourseItemTitle = styled.p`
  color: var(--color-text-primary);
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 65px;
  letter-spacing: 1.8px;
`;

const StykedCourseItemDescription = styled.p`
  color: var(--color-text-primary);
  font-size: var(--fontSize-body-text);
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.6px;
`;

const StyledSubmitButton = styled(Button)`
  width: 205px;
`;

export type CourseItemType = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

type CourseBannerPropsType = {
  courseItem: CourseItemType;
};

export const CourseBaanner: FC<CourseBannerPropsType> = ({ courseItem }) => {
  return (
    <CourseBannerContainer alignItems="center">
      <StyledCourseBannerImage
        src={courseItem.thumbnail}
        alt={courseItem.title}
      />

      <StyledCourseInformationContainer
        flexDirection="column"
        justifyContent="center"
        gap="25px"
      >
        <StykedCourseItemTitle>{courseItem.title}</StykedCourseItemTitle>
        <StykedCourseItemDescription>
          {courseItem.description}
        </StykedCourseItemDescription>
        <StyledSubmitButton>More</StyledSubmitButton>
      </StyledCourseInformationContainer>
    </CourseBannerContainer>
  );
};
