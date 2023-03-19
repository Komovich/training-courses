import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./Components/Courses";
import Lesson from "./Components/Lesson";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Courses />,
    },
    {
      path: "/lesson/:id",
      element: <Lesson />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
