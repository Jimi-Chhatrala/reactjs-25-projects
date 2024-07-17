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
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Feature Flag Implementation */}
        <FeatureFlagGlobalState>
          {/* Feature Flag Implementation */}
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

              {/* Load More Data */}
              <Route
                path="reactjs-25-projects/load-more-data"
                element={<LoadMoreData />}
              />

              {/* Tree view component / menu UI component / recursive navigation menu */}
              <Route
                path="reactjs-25-projects/tree-view"
                element={<TreeView menus={menus} />}
              />

              {/* QR Code Generator */}
              <Route
                path="reactjs-25-projects/qr-code-generator"
                element={<QRCodeGenerator />}
              />

              {/* Light Dark Mode */}
              <Route
                path="reactjs-25-projects/light-dark-mode"
                element={<LightDarkMode />}
              />

              {/* Scroll Indicator Component */}
              <Route
                path="reactjs-25-projects/scroll-indicator"
                element={
                  <ScrollIndicator
                    url={"https://dummyjson.com/products?limit=100"}
                  />
                }
              />

              {/* Custom Tabs Component */}
              <Route
                path="reactjs-25-projects/custom-tabs-component"
                element={<TabTest />}
              />

              {/* Custom Modal Component */}
              <Route
                path="reactjs-25-projects/custom-modal-popup"
                element={<ModalTest />}
              />

              {/* Github Profile Finder */}
              <Route
                path="reactjs-25-projects/github-profile-finder"
                element={<GithubProfileFinder />}
              />

              {/* Search Autocomplete With API */}
              <Route
                path="reactjs-25-projects/search-autocomplete-with-api"
                element={<SearchAutoComplete />}
              />

              {/* Tic Tac Toe */}
              <Route
                path="reactjs-25-projects/tic-tac-toe"
                element={<TicTacToe />}
              />

              {/* Feature Flag Implementation */}
              <Route
                path="reactjs-25-projects/feature-flag"
                element={<FeatureFlags />}
              />

              {/* useFetch - Custom Hook */}
            </Route>
          </Routes>
          {/* Feature Flag Implementation */}
        </FeatureFlagGlobalState>
        {/* Feature Flag Implementation */}
      </BrowserRouter>
    </div>
  );
}

export default App;
