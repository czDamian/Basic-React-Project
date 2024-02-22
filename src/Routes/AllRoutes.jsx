import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../Components/Header";
import Counter from "../pages/Counter";
import Contact from "../pages/Contact";
import ColorPicker from "../pages/ColorPicker";
import MainBody from "../pages/MainBody"

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Counter/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/colorPicker" element={<ColorPicker />}></Route>
        <Route path="/students" element={<MainBody />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
