import { Bleed, Flex, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Bleed className="max-w-full">
      <Flex
        className="
          flex-col sm:flex-row
          h-auto sm:h-20
          items-center justify-between
          px-4 sm:px-6 lg:px-8
          py-6 sm:py-0
          gap-4 sm:gap-0
          mb-2
        "
      >
        {/* LOGO */}
        <Link
          href="https://www.gov.br/mcti/pt-br"
          target="_blank"
          className="flex justify-center sm:justify-start w-full sm:w-auto"
        >
          <Image
            src="/mcti.png"
            alt="MCTI Logo"
            className="
              h-14 w-auto
              sm:h-20
              ml-0 sm:ml-10
            "
            objectFit="contain"
          />
        </Link>

        {/* TEXTO */}
        <HStack
          className="
            space-x-2 
            text-sm sm:text-md 
            text-gray-200 tracking-wide
            flex justify-center sm:justify-end
            w-full sm:w-auto
            mr-0 sm:mr-10
          "
        >
          <p>© 2025</p>
          <p>|</p>
          <Link
            href="https://www.gov.br/observatorio/pt-br"
            target="_blank"
            className="
              hover:text-[#1e57dc] 
              transition-colors
            "
          >
            Observatório Nacional
          </Link>
        </HStack>
      </Flex>
    </Bleed>
  );
}
