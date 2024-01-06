import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home  = lazy(() => import("./Pages/Home"))
const Main  = lazy(() => import("./Components/Main"))

function App() {
  return (
    <Suspense fallback={"Loading"}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter></Suspense>
  );
}

export default App;
