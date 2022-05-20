import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/404NotFound/NotFound";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Form/Login/Login";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import { Toaster } from "react-hot-toast";
import SignUp from "./Pages/Form/Login/SignUp/SignUp";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment/MyAppointment";
import MyReview from "./Pages/Dashboard/MyRevie/MyReview";
import AllUser from "./Pages/Dashboard/AllUser/AllUser";
import RequireAdmin from "./Pages/RequireAdmin/RequireAdmin";
import ResetPassword from "./Pages/Form/ResatPassword/ResetPassword";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="review" element={<MyReview />} />
          <Route
            path="user"
            element={
              <RequireAdmin>
                <AllUser />
              </RequireAdmin>
            }
          />
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
