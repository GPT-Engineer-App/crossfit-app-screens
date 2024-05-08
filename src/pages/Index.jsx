import { Container, VStack, Heading, Button, Text, Box, Image } from "@chakra-ui/react";
import { FaDumbbell } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Image src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHdvcmtvdXR8ZW58MHx8fHwxNzE1MTMxODI0fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="200px" borderRadius="full" alt="CrossFit" />
        <Heading as="h1" size="xl">
          CrossFit Tracker
        </Heading>
        <Text fontSize="md" textAlign="center">
          Track your workouts, monitor your progress, and reach your fitness goals with our CrossFit Tracker app.
        </Text>
        <Box>
          <Button leftIcon={<FaDumbbell />} colorScheme="teal" variant="solid" size="lg">
            Start Workout
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
