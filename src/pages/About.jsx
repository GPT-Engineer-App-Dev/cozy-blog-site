import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">About Me</Heading>
        <Text fontSize="xl">Hi, I'm [Your Name], a passionate blogger who loves to share insights on various topics.</Text>
        <Box>
          <Link to="/">
            <Button colorScheme="teal" size="lg" mt={4}>Back to Home</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;