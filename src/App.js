import logo from "./logo.svg";
import "./App.css";

import Links from "./components/Links";

import Accordian from "./components/accordian";
import RandomColorGenerator from "./components/random-color-generator";
import StarRating from "./components/star-rating";
import NoPage from "./components/no-page";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactJS25Projects from "./components/reactjs-25-projects";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Links />}>
            {/* Accordian Component */}
            <Route
              path="reactjs-25-projects/accordian"
              element={<Accordian />}
            />

            {/* Random Color Component */}
            <Route
              path="reactjs-25-projects/random-color-generator"
              element={<RandomColorGenerator />}
            />

            {/* Star Rating Component */}
            <Route
              path="reactjs-25-projects/star-rating"
              element={<StarRating noOfStars={10} />}
            />

            {/* Home Page */}
            <Route
              path="reactjs-25-projects/"
              element={<ReactJS25Projects />}
            />

            {/* Page Not Found */}
            <Route path="*" element={<NoPage />} />

            {/* Image slider */}
            <Route
              path="reactjs-25-projects/image-slider"
              element={
                <ImageSlider
                  url={"https://picsum.photos/v2/list"}
                  page={"1"}
                  limit={"10"}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
