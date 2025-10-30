import { Container, Flex, Link, HStack, Image } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";

export const NavBar: React.FC = () => {
  return (
    <Container className="max-w-full ">
      <Flex className="h-20  items-center justify-between ">
        <Link href="/" className="">
          <Image
            src="/logo.png"
            alt="Passeio On Logo"
            objectFit="contain"
            className="h-auto w-40"
          />
        </Link>

        <HStack className="space-x-12 ">
          <Link
            href="/"
            className="tracking-wide text-gray-200 text-lg font-semibold hover:text-[#1e57dc]"
          >
            Inicio
          </Link>
          <Link
            href="/about"
            className="tracking-wide text-gray-200 text-lg font-semibold hover:text-[#1e57dc]"
          >
            Sobre
          </Link>
          <Link
            href="/gallery"
            className="tracking-wide text-gray-200 text-lg font-semibold hover:text-[#1e57dc]"
          >
            Galeria
          </Link>
          <Link
            href="/contact"
            className="text-gray-200 text-lg font-semibold hover:text-[#1e57dc]"
          >
            Contato
          </Link>

          <Link
            href="/passeio"
            className="tracking-wide text-gray-200 text-md font-semibold"
          >
            <Button>Acessar Passeio</Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};
