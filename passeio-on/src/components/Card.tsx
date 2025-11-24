import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export type CardProps = {
  title: string;
  imgSrc: string;
  imgAlt?: string;
  description: string;
  className?: string;
};

export default function Card({
  title,
  imgSrc,
  imgAlt,
  description,
  className,
}: CardProps) {
  return (
    <Box
      as="article"
      maxW="md"
      minH="md"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      px="6"
      py="4"
      className={` 
         bg-slate-700/10 backdrop-blur-sm
         border border-slate-800/70
         rounded-2xl
         shadow-lg
         transition duration-500
         hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      <Stack className="space-y-3 align-items-center text-center">
        <Heading
          as="h3"
          size="md"
          className="max-w-2xl text-lg leading-relaxed text-slate-300/95 text-outline-blue align-center mx-auto"
        >
          {title}
        </Heading>

        <Box position="relative" w="100%" pb="8%">
          <Image
            className="rounded-xl"
            src={imgSrc}
            alt={imgAlt || title}
            objectFit="cover"
            inset="0"
            w="100%"
            h="100%"
            draggable="false"
          />
        </Box>
        <Text className="max-w-2xl text-md leading-relaxed text-slate-300/95 text-outline-blue align-center mx-auto">
          {description}
        </Text>
      </Stack>
    </Box>
  );
}
