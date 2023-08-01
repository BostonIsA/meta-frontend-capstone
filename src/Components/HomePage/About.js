import { HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";

function About() {
    return (
        <Stack position={"inherit"} paddingBottom={350}>
            <HStack>
                <VStack w={"50%"} paddingLeft={"25%"} alignItems={"flex-start"}>
                    <Heading size='2xl' paddingTop={20}>
                        Little Lemon
                    </Heading>
                    <Heading size='xl'>
                        Chicago
                    </Heading>
                    <Text textAlign={"justify"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat imperdiet interdum. Etiam vitae nisl lacus. In hac habitasse platea dictumst. Etiam sit amet nisi sollicitudin, finibus tortor ut, fermentum lorem. Nunc gravida lacus ut laoreet aliquet. Quisque pulvinar imperdiet purus, eget tempor nunc ornare nec. Vestibulum vel aliquam ipsum. Nullam lobortis risus magna, eget maximus lorem fringilla sit amet. In aliquam nisi non enim placerat, sed scelerisque tellus congue.
                    </Text>
                </VStack>
                <VStack w={"50%"} paddingRight={"25%"}>
                    <Image position={"absolute"} top={"inherit"} mt={75} left={"65%"} zIndex={1} borderRadius="2xl" objectFit="cover" src="images/Mario and Adrian A.jpg" alt="Picture of one of Mario and Adrian A" w={250} h={250} />
                    <Image position={"relative"} zIndex={2} borderRadius="2xl" objectFit="cover" src="images/Mario and Adrian b.jpg" alt="Picture of one of Mario and Adrian B" w={250} h={250} />
                </VStack>
            </HStack>
        </Stack>
    );
}

export default About;