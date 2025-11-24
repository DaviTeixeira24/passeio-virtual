import Card from "@/components/Card";
import Nebula from "@/components/Nebula";
import { Container, Text, VStack } from "@chakra-ui/react";

import React from "react";

export default function Gallery() {
  return (
    <>
      <Nebula />
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pt-16 text-center">
        <Text className="text-2xl font-medium uppercase tracking-[0.25em] text-onblue-200/90 text-outline-blue mb-6">
          Conheça <br /> a
        </Text>
        <h1
          className=" text-6xl   
                       uppercase
                       font-extrabold
                       tracking-widest
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-onblue-300 via-onblue-500 to-cyan-300
                       bg-[length:200%_100%] animate-shimmer text-glow-blue"
        >
          GALERIA <br />
          DO <br />
          OBSERVATÓRIO
        </h1>

        <Text className="max-w-2xl text-lg leading-relaxed text-slate-300/95 text-outline-blue align-center mx-auto mt-4">
          Veja a realidade de alguns dos principais pontos do passeio virtual,
          estruturas, ambientes, instrumentos e muito mais.
        </Text>
      </div>
      <Container
        className="
        min-h-screen
        max-w-4xl
        flex
        items-center
        justify-center
        flex-col
        bg-[#060E1C]/10
        rounded-xl
        shadow-2xl
        backdrop-blur-sm
        border-solid
        border
        border-[#1e57dc]/20
        mt-10
        mb-10
      "
      >
        <VStack className="space-y-10 my-10" align="center">
          <Card
            title="Cupula do Observatório Nacional"
            imgSrc="/teste.jpg"
            imgAlt="Passeio Virtual"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores, quisquam saepe, accusamus natus doloremque placeat. Expedita, voluptate."
          ></Card>

          <Card
            title="Prédio do Observatório Nacional"
            imgSrc="/predio.jpg"
            imgAlt="Passeio Virtual"
            description="Explore o Observatório Nacional em uma experiência interativa e imersiva."
          ></Card>

          <Card
            title="Cupula do Observatório Nacional"
            imgSrc="/.jpg"
            description="Explore o Observatório Nacional em uma experiência interativa e imersiva."
          />
        </VStack>
      </Container>
    </>
  );
}
