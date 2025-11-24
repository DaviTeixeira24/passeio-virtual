import Button from "@/components/Button";
import Nebula from "@/components/Nebula";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Nebula />
      <Box
        maxW="6xl"
        mx="auto"
        px={6}
        py={{ base: 16, md: 24 }}
        position="relative"
      >
        {/* Título geral da página (opcional se você tiver navbar fixa) */}
        <Text
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="0.25em"
          textAlign="center"
          className="text-outline text-onblue-200/90"
        >
          Fale conosco
        </Text>

        <Heading
          mt={3}
          textAlign="center"
          className="text-6xl   
                       uppercase
                       font-extrabold
                       tracking-widest
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-onblue-300 via-onblue-500 to-cyan-300
                       bg-[length:200%_100%] animate-shimmer text-glow-blue"
        >
          Contato
        </Heading>

        <Text
          mt={3}
          textAlign="center"
          className="max-w-2xl text-lg leading-relaxed text-slate-300/95 text-outline-blue align-center mx-auto"
        >
          Para dúvidas, sugestões, parcerias ou informações sobre o passeio
          virtual, entre em contato conosco pelo formulário ao lado.
        </Text>

        {/* CONTAINER 2 COLUNAS */}
        <Flex
          mt={12}
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 10, lg: 16 }}
        >
          {/* LADO ESQUERDO – INFORMAÇÕES DE CONTATO */}
          <Box flex="1">
            <VStack align="flex-start" className="space-y-6">
              <Heading className="mt-7 max-w-2xl text-3xl font-bold tracking-widest leading-relaxed text-[#1e57dc]/95 text-outline-blue align-center mx-auto uppercase">
                Contate-nos
              </Heading>

              <Text className="max-w-2xl text-lg leading-relaxed text-slate-300/95 text-outline-blue align-center mx-auto text-center">
                Para dúvidas, sugestões ou parcerias, entre em contato conosco.
                Estamos à disposição para ajudar e fornecer informações sobre o
                Observatório Nacional e o passeio virtual 3D.
              </Text>

              {/* telefone */}
              <Box className="w-full max-w-md">
                <button
                  type="button"
                  className="group flex w-full items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-900/60 px-5 py-3 text-sm text-slate-200"
                >
                  <span className="font-medium tracking-wide">
                    +55 (21) 0000-0000
                  </span>
                  <span className="text-xs text-onblue-200 group-hover:text-onblue-50">
                    Telefone
                  </span>
                </button>
              </Box>

              {/* e-mail */}
              <Box className="w-full max-w-md">
                <button
                  type="button"
                  className="group flex w-full items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-900/60 px-5 py-3 text-sm text-slate-200"
                >
                  <span className="font-medium tracking-wide">ditin@on.br</span>
                  <span className="text-xs text-cyan-300 group-hover:text-cyan-50">
                    E-mail institucional
                  </span>
                </button>
              </Box>

              <Text fontSize="xs" color="whiteAlpha.600">
                Horário de atendimento: segunda a sexta, das 9h às 17h (horário
                de Brasília).
              </Text>
            </VStack>
          </Box>

          {/* LINHA DIVISÓRIA (só desktop) */}
          <Box display={{ base: "none", lg: "block" }} w="1px" />

          {/* LADO DIREITO – FORMULÁRIO */}
          <Box flex="1">
            <Box className="border-animated animate-border p-[1px] rounded-3xl">
              <Box className="rounded-3xl bg-slate-900/40 border border-slate-800/70 backdrop-blur-sm px-6 py-8 md:px-8 md:py-10">
                <Heading
                  as="h3"
                  fontSize={{ base: "lg", md: "xl" }}
                  textAlign="center"
                  className="text-2xl font-medium uppercase tracking-[0.25em] text-onblue-200/90 text-outline mb-6 "
                >
                  Envie sua mensagem
                </Heading>

                <Box
                  as="form"
                  mt={6}
                  display="flex"
                  flexDirection="column"
                  gap={4}
                >
                  {/* Nome */}
                  <Box textAlign="left">
                    <Text fontSize="xs" mb={1} className="text-slate-300/90">
                      Nome completo
                    </Text>
                    <Input
                      placeholder="Digite seu nome"
                      className="
                        w-full rounded-xl border border-slate-700/70
                        bg-slate-900/60 px-4 py-3 text-sm
                        placeholder:text-slate-500
                        focus:outline-none focus:ring-2 focus:ring-onblue-400 focus:border-onblue-400
                        hover:border-slate-400
                        transition
                      "
                    />
                  </Box>

                  {/* Email */}
                  <Box textAlign="left">
                    <Text fontSize="xs" mb={1} className="text-slate-300/90">
                      Seu e-mail
                    </Text>
                    <Input
                      type="email"
                      placeholder="nome@exemplo.com"
                      className="
                        w-full rounded-xl border border-slate-700/70
                        bg-slate-900/60 px-4 py-3 text-sm
                        placeholder:text-slate-500
                        focus:outline-none focus:ring-2 focus:ring-onblue-400 focus:border-onblue-400
                        hover:border-slate-400
                        transition
                      "
                    />
                  </Box>

                  {/* Mensagem */}
                  <Box textAlign="left">
                    <Text fontSize="xs" mb={1} className="text-slate-300/90">
                      Sua mensagem
                    </Text>
                    <Textarea
                      rows={4}
                      placeholder="Como podemos ajudar?"
                      className="
                        w-full rounded-xl border border-slate-700/70
                        bg-slate-900/60 px-4 py-3 text-sm
                        placeholder:text-slate-500
                        focus:outline-none focus:ring-2 focus:ring-onblue-400 focus:border-onblue-400
                        hover:border-slate-400
                        transition resize-none
                      "
                    />
                  </Box>

                  <HStack justify="center" mt={4}>
                    <Button>Enviar mensagem</Button>
                  </HStack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Contact;
