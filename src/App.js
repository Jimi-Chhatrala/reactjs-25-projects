import logo from "./logo.svg";
import "./App.css";

import Links from "./components/Links";

import Accordian from "./components/accordian";
import RandomColorGenerator from "./components/random-color-generator";
import StarRating from "./components/star-rating";
import NoPage from "./components/no-page";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Links />}>
            {/* Accordian Component */}
            <Route path="accordian" element={<Accordian />} />

            {/* Random Color Component */}
            <Route
              path="random-color-generator"
              element={<RandomColorGenerator />}
            />

            {/* Star Rating Component */}
            <Route path="star-rating" element={<StarRating noOfStars={10} />} />

            {/* Page Not Found */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
