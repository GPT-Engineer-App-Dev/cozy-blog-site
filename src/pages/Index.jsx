import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="xl">Sharing my thoughts and experiences</Text>
        <Box>
          <Link to="/about">
            <Button colorScheme="teal" size="lg" mt={4}>Learn More About Me</Button>
          </Link>
        </Box>
        <Box>
          <Link to="/add-post">
            <Button colorScheme="teal" size="lg" mt={4}>Add New Post</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;