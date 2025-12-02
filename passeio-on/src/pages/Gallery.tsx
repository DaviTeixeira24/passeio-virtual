import Card from "@/components/Card";
import Nebula from "@/components/Nebula";
import { Container, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Gallery() {
  return (
    <>
      <Nebula />

      <div
        className="
          relative mx-auto 
          flex flex-col 
          max-w-6xl 
          px-4 sm:px-6 
          pt-14 sm:pt-16 
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
            leading-tight
          "
        >
          GALERIA <br />
          DO <br />
          OBSERVATÓRIO
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
          Veja a realidade de alguns dos principais pontos do passeio virtual,
          estruturas, ambientes, instrumentos e muito mais.
        </Text>
      </div>

      <Container
        className="
          min-h-screen
          max-w-full sm:max-w-4xl
          bg-[#060E1C]/10
          rounded-xl
          shadow-2xl
          backdrop-blur-sm
          border border-[#1e57dc]/20
          mt-10 mb-10
          px-4 sm:px-6 md:px-10
          py-6 sm:py-10
        "
      >
        <VStack
          className="
            w-full
            space-y-8 sm:space-y-10 
            my-6 sm:my-10
            items-center justify-center 
          "
        >
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
            <Card
              title="Cúpula do Observatório Nacional"
              imgSrc="/teste.jpg"
              imgAlt="Passeio Virtual"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores, quisquam saepe, accusamus natus doloremque placeat. Expedita, voluptate."
            />
          </div>

          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
            <Card
              title="Prédio do Observatório Nacional"
              imgSrc="/predio.jpg"
              imgAlt="Passeio Virtual"
              description="Explore o Observatório Nacional em uma experiência interativa e imersiva."
            />
          </div>

          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
            <Card
              title="Cúpula do Observatório Nacional"
              imgSrc="/.jpg"
              description="Explore o Observatório Nacional em uma experiência interativa e imersiva."
            />
          </div>
        </VStack>
      </Container>
    </>
  );
}
