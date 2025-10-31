import { Bleed, Flex, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Bleed className="max-w-full ">
      <Flex className="h-20 items-center justify-between ml-3 mr-4 mb-2">
        <Link href="https://www.gov.br/mcti/pt-br" target="_blank">
          <Image
            src="/mcti.png"
            alt="MCTI Logo"
            className="h-20 w-30 ml-10"
            objectFit="contain"
          />
        </Link>

        <HStack className="space-x-2 mr-10">
          <p className="text-gray-200 text-md tracking-wide ">© 2025</p>
          <p className="text-gray-200 text-md tracking-wide ">|</p>
          <Link
            href="https://www.gov.br/observatorio/pt-br"
            target="_blank"
            className="hover:text-[#1e57dc] text-gray-200 text-md tracking-wide "
          >
            Observatório Nacional
          </Link>
        </HStack>
      </Flex>
    </Bleed>
  );
}
