import { Container, Text, VStack, Box } from "@chakra-ui/react";
import MyComponent from "../components/MyComponent.jsx";

const Index = () => {
  return (
    <Box bg="gray.50" p={4}>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
          <MyComponent />
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
