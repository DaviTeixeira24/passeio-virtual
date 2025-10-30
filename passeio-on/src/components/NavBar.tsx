import { Container, Flex, Link, HStack, Button, Image } from "@chakra-ui/react";
import React from "react";

export const NavBar: React.FC = () => {
  return (
    <Container className="max-w-full ">
      <Flex className="h-16 items-center justify-between px-4 ">
        <Link href="/" className="">
          <Image src="./logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        <HStack className="space-x-12 ">
          <Link
            href="/"
            className="tracking-wide text-gray-300 text-lg font-bold hover:text-[#1E57DB]"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="tracking-wide text-gray-300 text-lg font-bold hover:text-[#1E57DB]"
          >
            Sobre
          </Link>
          <Link
            href="/gallery"
            className="tracking-wide text-gray-300 text-lg font-bold hover:text-[#1E57DB]"
          >
            Galeria
          </Link>
          <Link
            href="/"
            className="tracking-wide text-blur-  text-shadow-[#1E57DB] text-gray-300 text-lg font-bold hover:text-[#1E57DB] hover:text-shadow hover:text-shadow-[#1E57DB]"
          >
            Contato
          </Link>

          <Link href="/passeio" className="">
            <Button
              as="a"
              className="bg-blue-500 text-[#939AAD] px-4 py-2 rounded hover:bg-blue-600 rounded-md"
            >
              Acessar Passeio
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};
