import Nebula from "@/components/Nebula";
import { AspectRatio, Container } from "@chakra-ui/react";
import React from "react";

function Game() {
  return (
    <>
      <Nebula />
      <Container className="relative mx-auto flex max-w-6xl flex-col px-6 pt-16 text-center">
        <h1
          className="text-6xl   
                       uppercase
                       font-extrabold
                       tracking-widest
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-onblue-300 via-onblue-500 to-cyan-300
                       bg-[length:200%_100%] animate-shimmer text-glow-blue"
        >
          Passeio Virtual
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300/95  text-outline-blue align-center mx-auto">
          Inicie sua jornada pelo Observatório Nacional. Explore as instalações,
          conheça os instrumentos e descubra a história por trás de cada
          observação.
        </p>

        <AspectRatio ratio={16 / 9} width="100%" mt={10} mb={10}>
          <iframe
            src="https://your-3d-tour-url.com"
            title="Passeio Virtual 3D do Observatório Nacional"
            allowFullScreen
            className="rounded-lg shadow-2xl border border-[#1e57dc]/20"
          />
        </AspectRatio>
      </Container>
    </>
  );
}

export default Game;
