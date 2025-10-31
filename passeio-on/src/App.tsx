import React from "react";
import { NavBar } from "./components/NavBar.tsx";
import { Box } from "@chakra-ui/react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Box className="min-h-screen flex flex-col justify-between bg-gradient-to-t from-[#060E1C] to-[#040B1C]">
        <NavBar />
        <Routes>
          <Route path="/*" element={<MainPage />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
