import BigButton from "@/components/BigButton";
import Nebula from "@/components/Nebula";
import { Box, Container, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <>
      <Nebula />

      {/* container principal */}
      <Container
        className="
          relative mx-auto 
          max-w-6xl 
          flex flex-col 
          px-4 sm:px-6 
          py-12 sm:py-16
          text-center
          gap-12
        "
      >
        {/* coluna */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-xl sm:text-2xl font-medium uppercase tracking-[0.25em] text-onblue-200/90 text-outline mb-4 sm:mb-6">
            Conheça Sobre
          </h1>

          <div>
            <Text
              className="
                text-4xl sm:text-5xl md:text-6xl 
                font-extrabold
                text-transparent bg-clip-text
                bg-gradient-to-r from-onblue-300 via-onblue-500 to-cyan-300
                bg-[length:200%_100%] animate-shimmer text-glow-blue
              "
            >
              +195
            </Text>

            <Text
              className="
                text-lg sm:text-xl font-semibold
                text-transparent bg-clip-text
                bg-gradient-to-r from-onblue-300 via-onblue-500 to-cyan-300
                bg-[length:200%_100%] animate-shimmer text-glow-blue
              "
            >
              anos de história
            </Text>
          </div>

          {/* indice */}
          <p
            className="
              mt-6 max-w-2xl 
              text-base sm:text-lg 
              leading-relaxed 
              text-slate-300/95 text-outline 
              mx-auto
            "
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            accusantium nobis nemo enim, tenetur, labore quod vitae ducimus
            voluptatibus ab asperiores sed ratione culpa magnam quo minima
            repellat, at provident. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quidem.
          </p>

          {/* cards */}
          <div
            className="
              mt-10
              grid grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3
              gap-6
              w-full
            "
          >
            {/* card 1*/}
            <Box
              className="
                rounded-lg border border-slate-800/70 
                bg-slate-900/40 p-4 backdrop-blur-sm
                text-left
              "
            >
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 text-glow-cyan text-center">
                Missão
              </h3>
              <Text className="tracking-wide text-slate-300/90 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                corporis, dolores voluptatem ex molestias at reprehenderit est
                vero dolorem eligendi natus accusamus deserunt quas doloribus
                aliquam. Quis impedit magni sed.
              </Text>
            </Box>

            {/* card 2 */}
            <Box
              className="
                rounded-lg border border-slate-800/70 
                bg-slate-900/40 p-4 backdrop-blur-sm
                text-left
              "
            >
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 text-glow-cyan text-center">
                Visão
              </h3>
              <Text className="tracking-wide text-slate-300/90 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae consequuntur magnam nemo id impedit aperiam
                consequatur exercitationem iure nulla. Accusantium facilis
                mollitia quo enim quia corporis voluptatem cupiditate.
                Exercitationem, voluptate!
              </Text>
            </Box>

            {/* Valores */}
            <Box
              className="
                rounded-lg border border-slate-800/70 
                bg-slate-900/40 p-4 backdrop-blur-sm
                text-left
              "
            >
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 text-glow-cyan text-center">
                Valores
              </h3>
              <Text className="tracking-wide text-slate-300/90 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                voluptates, ipsa autem dolorum exercitationem vel deserunt
                molestias vero, dolores voluptatum earum id laborum. Laudantium
                assumenda omnis unde autem quibusdam eaque!
              </Text>
            </Box>
          </div>

          <VStack
            className="
              mt-10 
              flex flex-col items-center justify-center 
              gap-8
              px-4
            "
          >
            <div className="flex flex-col gap-3 max-w-md text-center mx-auto">
              <Text className="text-sm text-slate-300/90">
                Explore o Observatório Nacional e conheça a infraestrutura, os
                instrumentos e os bastidores da pesquisa científica no passeio
                virtual 3D.
              </Text>

              <Link href="/passeio" className="mt-2 inline-block mx-auto">
                <BigButton>Acessar Passeio</BigButton>
              </Link>
            </div>
          </VStack>
        </div>
      </Container>
    </>
  );
}

export default About;
