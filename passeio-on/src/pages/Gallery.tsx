import Card from "@/components/Card";
import Nebula from "@/components/Nebula";
import { Container, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Gallery() {
  return (
    <>
      <Nebula />

      {/* HEADER */}
      <div
        className="
          relative mx-auto flex max-w-6xl flex-col 
          px-4 sm:px-6 pt-14 sm:pt-16 
          text-center
        "
      >
        <Text
          className="
            text-xl sm:text-2xl 
            font-medium uppercase tracking-[0.25em] 
            text-onblue-200/90 text-outline-blue 
            mb-4 sm:mb-6
          "
        >
          Conheça <br /> a
        </Text>

        <h1
          className="
            text-4xl sm:text-6xl
            uppercase font-extrabold tracking-widest 
            text-transparent bg-clip-text
            bg-gradient-to-r from-onblue-300 via-onblue-500 to-cyan-300
            bg-[length:200%_100%] animate-shimmer text-glow-blue
          "
        >
          GALERIA <br /> DO <br /> OBSERVATÓRIO
        </h1>

        <Text
          className="
            max-w-2xl 
            text-base sm:text-lg 
            leading-relaxed 
            text-slate-300/95 text-outline-blue 
            mx-auto mt-4
          "
        >
          Veja a realidade dos principais pontos do passeio virtual, estruturas,
          ambientes, instrumentos e muito mais.
        </Text>
      </div>

      <Container
        className="
          min-h-screen
          max-w-4xl
          flex items-center justify-center flex-col
          bg-[#060E1C]/10
          rounded-xl
          shadow-2xl
          backdrop-blur-sm
          border border-[#1e57dc]/20
          mt-10 mb-10
          px-4 sm:px-6 md:px-10
        "
      >
        <VStack
          className="space-y-8 sm:space-y-10 my-8 sm:my-10"
          align="center"
        >
          <Card
            title="Centro de Processamento de Dados do Observatório Nacional - CPDON"
            imgSrc="/cpdon.jpg"
            imgAlt="Passeio Virtual"
            description="Veja a realidade do Centro de Processamento de Dados do Observatório Nacional, onde são armazenados e analisados os dados coletados pelos instrumentos astronômicos."
          />

          <Card
            title="Cúpula 45"
            imgSrc="/cupula.jpg"
            imgAlt="Passeio Virtual"
            description="Coheça a Cúpula 45, uma das principais instalações do Observatório Nacional, onde estão localizados telescópios e instrumentos de observação astronômica."
          />
        </VStack>
      </Container>
    </>
  );
}
