import BigButton from "@/components/BigButton";
import Nebula from "@/components/Nebula";
import { Box, Container, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function MainPage() {
  return (
    <>
      <Nebula />

      {/* container principal */}
      <Container className="relative mx-auto flex max-w-6xl gap-16 px-6 py-16">
        {/* coluna */}
        <Box className="flex-1 flex flex-col items-center justify-center text-center">
          <Text className="text-2xl font-medium uppercase tracking-[0.25em] text-onblue-200/90 text-outline-blue mb-6">
            Bem-Vindo <br /> ao
          </Text>

          <h1
            className="text-6xl   
                       uppercase
                       font-extrabold
                       tracking-widest
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-onblue-300 via-onblue-500 to-cyan-300
                       bg-[length:200%_100%] animate-shimmer text-glow-blue"
          >
            Observatório <br /> Nacional
          </h1>

          <h2 className="mt-7 max-w-2xl text-3xl font-bold tracking-widest leading-relaxed text-[#1e57dc]/95 text-outline-blue align-center mx-auto uppercase">
            Passeio Virtual 3d
          </h2>

          <p className=" max-w-2xl text-lg leading-relaxed text-slate-300/95 text-outline-blue align-center mx-auto">
            Explore o Observatório Nacional em uma experiência interativa e
            imersiva. Caminhe pelo campus histórico,
            <br /> e conheça as cupulasde observação por dentro
          </p>

          <HStack className="mt-10 flex justify-center space-x-20">
            <Link href="/passeio">
              <BigButton>Acessar passeio</BigButton>
            </Link>

            <Link href="/about">
              <button
                className="
                relative px-12 py-4 rounded-lg 
                font-semibold 
                text-onblue-200/90
                border border-[#1e57dc]/20 bg-slate-900/40 p-4 backdrop-blur-sm
                transition-all duration-300
                hover:hover:scale-105 hover:ease-in-out
                hover:px-12 hover:py-4
                uppercase
             "
              >
                Saiba mais
              </button>
            </Link>
          </HStack>

          <HStack className="mt-10 space-x-10 ">
            <Box className="max-w-2xl max-h-2xl rounded-lg border border-slate-800/70 bg-slate-900/40 p-4 backdrop-blur-sm">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 text-glow-cyan">
                Exploração
              </h3>
              <Text className="tracking-wide leading-relaxed text-slate-300/95 text-outline align-center mx-auto ">
                Explore o Observatório Nacional em uma experiência virtual
                imersiva, caminhando por seus corredores e conhecendo suas
                instalações históricas.
              </Text>
            </Box>
            <Box className="max-w-2xl max-h-2xl rounded-lg border border-slate-800/70 bg-slate-900/40 p-4 backdrop-blur-sm">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 text-glow-cyan">
                Ciencia
              </h3>
              <Text className="tracking-wide leading-relaxed text-slate-300/95 text-outline align-center mx-auto">
                Aprenda sobre astronomia, geofísica e outras disciplinas
                científicas por meio de conteúdos educativos integrados ao
                passeio virtual.
              </Text>
            </Box>
            <Box className="max-w-2xl max-h-2xl rounded-lg border border-slate-800/70 bg-slate-900/40 p-4 backdrop-blur-sm">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 text-glow-cyan">
                Educação
              </h3>
              <Text className="tracking-wide leading-relaxed text-slate-300/95 text-outline align-center mx-auto">
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
