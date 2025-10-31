import BigButton from "@/components/BigButton";

import { Box, Container, Grid, GridItem, Link } from "@chakra-ui/react";
import React from "react";

export default function MainPage() {
  return (
    <Container className="flex flex-col items-center p-0 mt-10 ">
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={200}
      >
        <GridItem rowSpan={2}>
          <Box>
            <h1 className="text-6xl font-bold tracking-wide text-[#1e57dc] mb-6">
              PASSEIO
              <br /> VIRTUAL 3D
            </h1>
            <p className="text-lg text-gray-300 tracking-wide text-justify">
              Explore o Observatório Nacional
              <br /> em uma experiência interatva e imersiva
            </p>

            <Link
              href="/passeio"
              className="tracking-wide text-gray-200 text-xl font-semibold mt-10 "
            >
              <BigButton className="">Acessar Passeio</BigButton>
            </Link>
          </Box>
        </GridItem>

        <GridItem rowSpan={2}>
          <Box>
            <div className="size-96 bg-white"></div>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
