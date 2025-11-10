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
      bg="white"
      maxW="md"
      minH="md"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      px="6"
      py="4"
      className={`transition duration-600 hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      <Stack className="space-y-3 align-items-center text-center">
        <Heading as="h3" size="md">
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
        <Text>{description}</Text>
      </Stack>
    </Box>
  );
}
