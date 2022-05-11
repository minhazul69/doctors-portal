import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/404NotFound/NotFound";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Form/Login/Login";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Reviews/Reviews";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
