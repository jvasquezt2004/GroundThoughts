import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Learning from "./pages/Learning";
import Header from "./components/Header";
import FooterComponent from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyWriterPrivateRoute from "./components/OnlyWriterPrivateRoute";
import CreatePost from "./pages/CreatePost";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyWriterPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
        <Route path="/learning" element={<Learning />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}
