import React from "react";
import ReactDOM from "react-dom/client";
import Fac from "./Faculties";
import FacDetails from "./FacultyDetails";
import Home from "./Home";
import Form from "./Form";
import EditFac from "./EditFaculty";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Faculties" element={<Fac />} />
      <Route path="/Faculties/:id" element={<FacDetails />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/EditFac/:id" element={<EditFac/>}/>
    </Routes>
  </BrowserRouter>
);
