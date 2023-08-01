import { Card, CardBody, CardFooter, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { llLightOrange, llOrangeColor, llLightBlack } from "../../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function SpecialCard({ items }) {
    return (
        <Card bg={llLightOrange} borderTopLeftRadius={30} borderTopRightRadius={30}>
            <Image src={items.image} alt={`Image of the dish titled ${items.title}`} borderTopLeftRadius={30} borderTopRightRadius={30} objectFit="cover" w={500} h={250} />
            <CardBody>
                <section>
                    <Stack>
                        <HStack w={"100%"} justifyContent={"space-between"}>
                            <Heading size='md'>{items.title}</Heading>
                            <Text color={llOrangeColor} fontWeight={"bold"}>{items.price}</Text>
                        </HStack>
                        <Text textAlign={"justify"} color={llLightBlack} fontWeight={"light"}>{items.description}</Text>
                    </Stack>
                </section>
            </CardBody>
            <CardFooter>
                <NavLink to={"/order online"}>
                    <Heading size='sm'>Order a delivery <FontAwesomeIcon icon={faMotorcycle} /></Heading>
                </NavLink>
            </CardFooter>
        </Card>
    );
}

export default SpecialCard;
