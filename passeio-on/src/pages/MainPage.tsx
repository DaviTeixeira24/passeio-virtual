import BigButton from "@/components/BigButton";
import { Box, Container, Grid, GridItem, Link } from "@chakra-ui/react";
import React from "react";

export default function MainPage() {
  return (
    <Container
      maxW="100%"
      className="flex items-center justify-center min-h-screen px-8"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={16}
        alignItems="center"
        justifyContent="center"
      >
        {/* Coluna da esquerda */}
        <GridItem>
          <Box>
            <h1 className="text-6xl font-bold tracking-wide text-[#1e57dc] mb-6 leading-tight">
              PASSEIO
              <br /> VIRTUAL 3D
            </h1>
            <p className="text-lg text-gray-300 tracking-wide text-justify">
              Explore o Observatório Nacional
              <br /> em uma experiência interativa e imersiva.
            </p>

            <Link
              href="/passeio"
              className="tracking-wide text-gray-200 text-xl font-semibold mt-10 inline-block"
            >
              <BigButton>Acessar Passeio</BigButton>
            </Link>
          </Box>
        </GridItem>

        {/* Coluna da direita */}
        <GridItem>
          <Box className="flex justify-center items-center">
            {/* //substituir por imagem */}
            <div className="w-[450px] h-[450px] bg-[#0A1326] border border-[#1F2A48] rounded-3xl shadow-lg flex items-center justify-center">
              <p className="text-gray-400">mapa</p>
            </div>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
