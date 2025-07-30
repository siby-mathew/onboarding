import { chakra, Container, Flex } from "@chakra-ui/react";
import { UserProfileCard } from "@components/UserProfile";

export const UserLayout: React.FC = () => {
  return (
    <Container
      maxW={"full"}
      as={Flex}
      w="100%"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Flex mb={3}>
        <UserProfileCard />
      </Flex>
      <Flex>
        <chakra.span
          fontWeight={"bold"}
          fontSize={{
            base: 17,
            md: 23,
          }}
          textAlign={"center"}
        >
          You're now in the onboarding queue.
        </chakra.span>
      </Flex>
      <Flex w="90%" maxW={500} mx="auto" fontSize={{ base: 13, md: 15 }}>
        <Flex textAlign={"center"} opacity={0.8}>
          We're currently in a testing phase, and you'll be notified as soon as
          you're granted access. Thanks for your patience!
        </Flex>
      </Flex>
    </Container>
  );
};
