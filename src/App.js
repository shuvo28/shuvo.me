import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";
import "./App.css";

const Loader = lazy(() => import("./Components/Loaders/Loader"));
const Main = lazy(() => import("./Components/Main"));
const Home = lazy(() => import("./Pages/Home"));

function App() {
  axios.defaults.baseURL = "http://localhost:8000/";
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route index element={<Home />} path="/home" />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
