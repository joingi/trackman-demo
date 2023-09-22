import axios from "axios";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import { CourseItem } from "./components/CourseItem";
import styled from "styled-components";
import { Container } from "app/components/Container";
import { CourseBaanner, CourseItemType } from "./components/CourseBanner";

const StyledCourseListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 28px;
  @media screen and (max-width: 1280px) and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCourseListAndBannerContainer = styled.div`
  padding: 0 14px;
  margin-top: 96px;
`;

type CourseResponseType = {
  limit: number;
  products: CourseItemType[];
  skip: number;
  total: number;
};

export const CoursesList: FC = () => {
  const [currentCourse, setCurrentCourse] = useState<CourseItemType>();

  const { isLoading, isError, data, error } = useQuery<
    CourseResponseType,
    Error
  >(
    "getProducts",
    () => axios.get(`https://dummyjson.com/products`).then((res) => res.data),
    {
      onSuccess: () => {
        console.log(data?.products[0]);
        setCurrentCourse(data?.products[0]);
      },
    }
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message ?? "something went wrong"}</span>;
  }

  return (
    <Container>
      <StyledCourseListAndBannerContainer>
        {currentCourse && <CourseBaanner courseItem={currentCourse} />}

        <StyledCourseListContainer>
          {data?.products?.map((course) => (
            <CourseItem
              onClickHandler={() => {
                setCurrentCourse(course);
                window.scrollTo({ top: 110, left: 100, behavior: "smooth" });
              }}
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              thumbnail={course.thumbnail}
            />
          ))}
        </StyledCourseListContainer>
      </StyledCourseListAndBannerContainer>
    </Container>
  );
};
