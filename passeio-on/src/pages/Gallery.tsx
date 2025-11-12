import Card from "@/components/Card";
import { Container, Text, VStack } from "@chakra-ui/react";

import React from "react";

export default function Gallery() {
  return (
    <>
      <Text className="text-4xl font-bold tracking-wide text-[#1e57dc] mb-6 leading-tight text-center mt-10">
        GALERIA OBSERVATÓRIO NÁCIONAL
      </Text>

      <Text className="text-xl font-semibold tracking-wide text-gray-300 mb-6 leading-tight text-center ">
        Conheça a realidade de alguns dos principais pontos do passeio virtual
      </Text>

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
