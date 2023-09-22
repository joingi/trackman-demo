import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { CoursesList } from "./pages/courses/CoursesList";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<CoursesList />} />
      </Route>
    </Routes>
  );
}

export default App;
