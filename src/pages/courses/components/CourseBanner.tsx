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

const ImageWrapper = styled.div`
  width: 830px;
  height: 630px;
  position: relative;
`;

const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 58.79%
  );
`;

const StyledCourseBannerImage = styled.img`
  width: 100%;
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

const StyledCourseItemTitle = styled.p`
  color: var(--color-text-primary);
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 65px;
  letter-spacing: 1.8px;
`;

const StyledCourseItemDescription = styled.p`
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
      <ImageWrapper>
        <ImageOverlay />

        <StyledCourseBannerImage
          src={courseItem.thumbnail}
          alt={courseItem.title}
        />
      </ImageWrapper>

      <StyledCourseInformationContainer
        flexDirection="column"
        justifyContent="center"
        gap="25px"
      >
        <StyledCourseItemTitle>{courseItem.title}</StyledCourseItemTitle>
        <StyledCourseItemDescription>
          {courseItem.description}
        </StyledCourseItemDescription>
        <StyledSubmitButton>More</StyledSubmitButton>
      </StyledCourseInformationContainer>
    </CourseBannerContainer>
  );
};
