import { Container, Text, VStack, Heading, Box, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

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
        <Stack spacing={4} mt={8} width="100%">
          {posts.map(post => (
            <Box key={post.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <Heading as="h3" size="lg">{post.title}</Heading>
              <Text mt={2}>{post.content}</Text>
              <Button colorScheme="red" size="sm" mt={4} onClick={() => handleDelete(post.id)}>Delete</Button>
            </Box>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;