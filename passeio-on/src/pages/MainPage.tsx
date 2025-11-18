import BigButton from "@/components/BigButton";
import { Box, Container, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function MainPage() {
  return (
    <>
      {/* efeito nebulosa */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,.15),transparent_35%)]" />

      {/* container principal */}
      <Container className="relative mx-auto flex max-w-6xl gap-16 px-6 py-16">
        {/* coluna */}
        <Box className="flex-1 flex flex-col items-center justify-center text-center">
          <Text className="text-2xl font-medium uppercase tracking-[0.25em] text-onblue-200/90 text-outline-blue mb-6">
            Bem-Vindo
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

          <h2 className="mt-10 max-w-2xl text-3xl font-bold tracking-widest leading-relaxed text-[#1e57dc]/95 text-outline-blue align-center mx-auto uppercase">
            Passeio Virtual 3d
          </h2>

          <p className=" max-w-2xl text-lg leading-relaxed text-slate-300/95 text-outline-blue align-center mx-auto">
            Explore o Observatório Nacional em uma experiência interativa e
            imersiva. Caminhe pelo campus histórico, e conheça as cupulasde
            observação por dentro
          </p>

          <HStack className="mt-5 flex justify-center space-x-10">
            <Link href="/passeio">
              <BigButton>Acessar passeio</BigButton>
            </Link>

            <Link href="/about">
              <button
                className="
                relative px-10 py-4 rounded-lg 
                font-semibold 
                text-onblue-200/90
                border border-[#1e57dc]/20 bg-slate-900/40 p-4 backdrop-blur-sm
                transition-all duration-300
                hover:hover:scale-105 hover:ease-in-out
                hover:px-10 hover:py-4
                uppercase
             "
              >
                Saiba mais
              </button>
            </Link>
          </HStack>
        </Box>
      </Container>
    </>
  );
}
