import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Courses from "./Components/Courses";
import Lesson from "./Components/Lesson";

function App() {
  return (
    <Router>
        <Courses />
        <Routes>
          <Route exact path="/" component={Courses} />
          <Route path="/lesson/:id" component={Lesson} />
        </Routes>
    </Router>
  );
}

export default App;
