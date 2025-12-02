import BigButton from "@/components/BigButton";
import Nebula from "@/components/Nebula";
import { Box, Container, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function MainPage() {
  return (
    <>
      <Nebula />

      {/* container principal */}
      <Container
        className="
          relative mx-auto 
          flex flex-col 
          max-w-6xl 
          px-4 sm:px-6
          py-12 sm:py-16
          gap-12 sm:gap-16
        "
      >
        {/* coluna */}
        <Box
          className="
            flex-1 flex flex-col 
            items-center justify-center 
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
            Bem-Vindo <br /> ao
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
            Observatório <br /> Nacional
          </h1>

          <h2
            className="
              mt-6 sm:mt-7 
              max-w-2xl 
              text-2xl sm:text-3xl 
              font-bold tracking-widest 
              leading-relaxed text-[#1e57dc]/95 
              text-outline-blue mx-auto uppercase
            "
          >
            Passeio Virtual 3d
          </h2>

          <p
            className="
              max-w-2xl 
              text-base sm:text-lg 
              leading-relaxed 
              text-slate-300/95 text-outline-blue 
              mx-auto mt-4
            "
          >
            Explore o Observatório Nacional em uma experiência interativa e
            imersiva. Caminhe pelo campus histórico,
            <br className="hidden sm:block" />e conheça as cupulas de observação
            por dentro
          </p>

          {/* BOTÕES */}
          <HStack
            mt={{ base: 8, sm: 10 }}
            className="space-y-4 sm:space-y-0 sm:space-x-6"
            justify="center"
            flexDir={{ base: "column", sm: "row" }}
          >
            <Link href="/passeio" className="w-full sm:w-auto">
              <BigButton className="w-full sm:w-auto">
                Acessar passeio
              </BigButton>
            </Link>

            <Link href="/about" className="w-full sm:w-auto">
              <button
                className="
                  relative w-full sm:w-auto
                  px-12 py-4 rounded-lg 
                  font-semibold 
                  text-onblue-200/90
                  border border-[#1e57dc]/20 bg-slate-900/40 backdrop-blur-sm
                  transition-all duration-300
                  hover:scale-105
                  uppercase
                "
              >
                Saiba mais
              </button>
            </Link>
          </HStack>

          {/* CARDS */}
          <HStack
            mt={10}
            className="space-y-6 lg:space-y-0 lg:space-x-8"
            justify="center"
            align="stretch"
            flexDir={{ base: "column", lg: "row" }}
          >
            {/* card 1 */}
            <Box
              className="
                w-full lg:w-auto
                rounded-lg 
                border border-slate-800/70 
                bg-slate-900/40 
                p-4 backdrop-blur-sm
                max-w-xl
              "
            >
              <h3
                className="
                  mb-1 text-xs font-semibold uppercase tracking-wide 
                  text-cyan-300 text-glow-cyan
                "
              >
                Exploração
              </h3>
              <Text
                className="
                  tracking-wide leading-relaxed 
                  text-slate-300/95 text-outline 
                "
              >
                Explore o Observatório Nacional em uma experiência virtual
                imersiva, caminhando por seus corredores e conhecendo suas
                instalações históricas.
              </Text>
            </Box>

            {/* card 2 */}
            <Box
              className="
                w-full lg:w-auto
                rounded-lg 
                border border-slate-800/70 
                bg-slate-900/40 
                p-4 backdrop-blur-sm
                max-w-xl
              "
            >
              <h3
                className="
                  mb-1 text-xs font-semibold uppercase tracking-wide 
                  text-cyan-300 text-glow-cyan
                "
              >
                Ciência
              </h3>
              <Text
                className="
                  tracking-wide leading-relaxed 
                  text-slate-300/95 text-outline 
                "
              >
                Aprenda sobre astronomia, geofísica e outras disciplinas
                científicas por meio de conteúdos educativos integrados ao
                passeio virtual.
              </Text>
            </Box>

            {/* card 3 */}
            <Box
              className="
                w-full lg:w-auto
                rounded-lg 
                border border-slate-800/70 
                bg-slate-900/40 
                p-4 backdrop-blur-sm
                max-w-xl
              "
            >
              <h3
                className="
                  mb-1 text-xs font-semibold uppercase tracking-wide 
                  text-cyan-300 text-glow-cyan
                "
              >
                Educação
              </h3>
              <Text
                className="
                  tracking-wide leading-relaxed 
                  text-slate-300/95 text-outline 
                "
              >
                Ideal para estudantes, educadores e entusiastas da ciência,
                oferecendo uma maneira envolvente de aprender sobre o universo e
                o trabalho do Observatório Nacional.
              </Text>
            </Box>
          </HStack>
        </Box>
      </Container>
    </>
  );
}
