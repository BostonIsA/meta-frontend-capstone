import { Center, Heading, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import ReviewCard from "./ReviewCard";
import { llGrey, testimonialList } from "../../Constants";

function Testimonials() {
    return (
        <Stack mt={8} bg={llGrey}>
            <VStack>
                <Center><Heading mt={4}>Testimonials</Heading></Center>
            </VStack>
            <Center>
                <SimpleGrid mt={4} mb={8} spacing={10} minChildWidth={50}>
                    {testimonialList.map((item) => (
                        <ReviewCard items={item} />
                    ))}
                </SimpleGrid>
            </Center>
        </Stack>
    );
}

export default Testimonials;
