import { Button, Center, HStack, Heading, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import foodStarter from "../../Assets/restauranfood.jpg";
import { llGreenColor, llYellowColor, llDarkYellow } from "../../Constants.js";
import { NavLink } from "react-router-dom";

function Hero({navigation}) {
    return (
        <section>
            <Center mt="5" bg={llGreenColor} w="100%">
                <HStack spacing="5%">
                    <VStack align="flex-start" w="60%" m="4">
                        <Heading color={llDarkYellow} size='2xl'>
                            Little Lemon
                        </Heading>
                        <Heading color={"white"} size='xl'>
                            Chicago
                        </Heading>
                        <Spacer />
                        <Text color={"white"}>
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </Text>
                        <Spacer />
                        <NavLink to="/reservations">
                        <Button bg={llYellowColor} title="Go to the reservations page" onPress={() => navigation.navigate("reservations")}>
                            Reserve a Table
                        </Button>
                        </NavLink>
                    </VStack>
                    <Spacer />
                    <VStack w="40%">
                        <Image borderRadius="2xl" objectFit="cover" boxSize="25em" src={foodStarter} alt="Picture of one of the starters from Little Lemon"/>
                    </VStack>
                </HStack>
            </Center>
        </section>
    );
}

export default Hero;