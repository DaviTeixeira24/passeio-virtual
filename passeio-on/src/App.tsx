import React from "react";
import { NavBar } from "./components/NavBar.tsx";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box className="min-h-screen bg-gradient-to-t from-[#060E1C] to-[#040B1C]">
        <NavBar />
      </Box>
    </>
  );
}

export default App;
