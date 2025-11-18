import { Flex, Link, HStack, Image, Bleed } from "@chakra-ui/react";
import { FaHome, FaQuestionCircle } from "react-icons/fa";
import React from "react";
import Button from "./Button";
import { RiGalleryFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import Tooltip from "./Tooltip";

export const NavBar: React.FC = () => {
  return (
    <>
      <Bleed className="max-w-full ">
        <Flex className="h-20 items-center justify-between ml-3 mr-4 ">
          <Link href="/" className="">
            <Image
              src="/logo.png"
              alt="Passeio On Logo"
              objectFit="contain"
              className="h-auto w-20"
            />
          </Link>

          <HStack className="space-x-12 ">
            <Tooltip text="Voltar para a página inicial" position="bottom">
              <Link
                href="/"
                className="tracking-wide 
            text-gray-200 
            text-lg 
            font-semibold 
            transition-all duration-300
            hover:ease-in-out 
            hover:text-[#1e57dc]"
              >
                <FaHome size={25} />
              </Link>
            </Tooltip>

            <Tooltip text="Saiba mais sobre o passeio" position="bottom">
              <Link
                href="/about"
                className="tracking-wide 
            text-gray-200 
            text-lg 
            font-semibold 
            transition-all duration-300
            hover:ease-in-out 
            hover:text-[#1e57dc]"
              >
                <FaQuestionCircle size={25} />
              </Link>
            </Tooltip>

            <Tooltip text="Veja fotos reais do observatório" position="bottom">
              <Link
                href="/gallery"
                className="tracking-wide 
            text-gray-200 
            text-lg 
            font-semibold 
            transition-all duration-300
            hover:ease-in-out 
            hover:text-[#1e57dc]"
              >
                <RiGalleryFill size={25} />
              </Link>
            </Tooltip>

            <Tooltip text="Entre em contato conosco" position="bottom">
              <Link
                href="/contact"
                className="tracking-wide 
            text-gray-200 
            text-lg 
            font-semibold 
            transition-all duration-300
            hover:ease-in-out 
            hover:text-[#1e57dc]"
              >
                <IoCall size={25} />
              </Link>
            </Tooltip>

            <Link
              href="/passeio"
              className="tracking-wide text-gray-200 text-sm font-semibold"
            >
              <Button>Acessar Passeio</Button>
            </Link>
          </HStack>
        </Flex>
      </Bleed>
    </>
  );
};
