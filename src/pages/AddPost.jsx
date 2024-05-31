import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Image:", image);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="2xl">Add New Post</Heading>
        <Input 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          size="lg" 
        />
        <Textarea 
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          size="lg" 
          resize="vertical"
        />
        <Input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          size="lg" 
        />
        <Button colorScheme="teal" size="lg" type="submit">Submit</Button>
        <Box>
          <Link to="/">
            <Button colorScheme="teal" size="lg" mt={4}>Back to Home</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default AddPost;