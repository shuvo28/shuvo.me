import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Loader = lazy(() => import("./Components/Loaders/Loader"));
const Main = lazy(() => import("./Components/Main"));

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
