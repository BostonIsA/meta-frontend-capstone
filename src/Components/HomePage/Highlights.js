import { Button, HStack, Heading, SimpleGrid, Spacer, VStack } from "@chakra-ui/react";
import { llYellowColor, specialItemMenu } from "../../Constants";
import SpecialCard from "./SpecialCard";
import { NavLink } from "react-router-dom";

function Highlights() {
    return (
        <section>
            <VStack mt={8}>
                <HStack w="100%">
                    <Spacer />
                    <Heading>This weeks specials!</Heading>
                    <Spacer />
                    <NavLink to={"/menu"}>
                        <Button bg={llYellowColor}>Online Menu</Button>
                    </NavLink>
                    <Spacer />
                </HStack>
                <SimpleGrid mt={4} spacing={15} minChildWidth={100}>
                    {specialItemMenu.map((item) => (
                        <SpecialCard items={item} />
                    ))}
                </SimpleGrid>
            </VStack>
        </section>
    );
}

export default Highlights;