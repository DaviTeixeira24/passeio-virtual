import BigButton from "@/components/BigButton";
import { Box, Container, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <>
      {/* efeito nebulosa */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,.15),transparent_35%)]" />

      {/* container principal */}
      <Container className="relative mx-auto flex max-w-6xl gap-16 px-6 py-16">
        {/* coluna */}
        <div className="flex-1 items-center justify-center text-center">
          <h1 className="text-2xl font-medium uppercase tracking-[0.25em] text-onblue-200/90 text-outline mb-6">
            Conheça Sobre
          </h1>
          <div>
            <Text
              className="text-5xl md:text-6xl font-extrabold
                           text-transparent bg-clip-text
                           bg-gradient-to-r from-onblue-300 via-onblue-500 to-cyan-300
                           bg-[length:200%_100%] animate-shimmer text-glow-blue"
            >
              +175
            </Text>
            <Text
              className="text-xl md:text-xl font-semibold
                           text-transparent bg-clip-text
                           bg-gradient-to-r from-onblue-300 via-onblue-500 to-cyan-300
                           bg-[length:200%_100%] animate-shimmer text-glow-blue"
            >
              anos de história
            </Text>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300/95 text-outline align-center mx-auto ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            accusantium nobis nemo enim, tenetur, labore quod vitae ducimus
            voluptatibus ab asperiores sed ratione culpa magnam quo minima
            repellat, at provident. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quidem.
          </p>

          {/* missão, visão e valores */}
          <HStack className="mt-6 grid gap-4 text-sm text-slate-300/90 md:grid-cols-3">
            <Box className="rounded-lg border border-slate-800/70 bg-slate-900/40 p-4 backdrop-blur-sm">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-onblue-200">
                Missão
              </h3>
              <Text className="tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                corporis, dolores voluptatem ex molestias at reprehenderit est
                vero dolorem eligendi natus accusamus deserunt quas doloribus
                aliquam. Quis impedit magni sed.
              </Text>
            </Box>
            <Box className="rounded-lg border border-slate-800/70 bg-slate-900/40 p-4 backdrop-blur-sm">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                Visão
              </h3>
              <Text className="tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae consequuntur magnam nemo id impedit aperiam
                consequatur exercitationem iure nulla. Accusantium facilis
                mollitia quo enim quia corporis voluptatem cupiditate.
                Exercitationem, voluptate!
              </Text>
            </Box>
            <Box className="rounded-lg border border-slate-800/70 bg-slate-900/40 p-4 backdrop-blur-sm">
              <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-onblue-200">
                Valores
              </h3>
              <Text className="tracking-wide">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                voluptates, ipsa autem dolorum exercitationem vel deserunt
                molestias vero, dolores voluptatum earum id laborum. Laudantium
                assumenda omnis unde autem quibusdam eaque!
              </Text>
            </Box>
          </HStack>

          {/* stats + CTA */}
          <VStack className=" mt-10 flex flex-col items-center justify-center gap-8 ">
            <div className="flex flex-col gap-3 ">
              <Text className="max-w-sm text-sm text-slate-300/90 text-center">
                Explore o Observatório Nacional e conheça a infraestrutura, os
                instrumentos e os bastidores da pesquisa científica no passeio
                virtual 3D.
              </Text>

              <Link href="/passeio" className="mt-2 inline-block">
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
