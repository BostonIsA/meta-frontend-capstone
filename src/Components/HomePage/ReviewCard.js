import { Card, CardBody, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { llOrangeColor } from "../../Constants";

function ReviewCard({items}) {
    return (<Card  borderTopLeftRadius={30} borderTopRightRadius={30}>
        <CardBody>
            <section>
                <VStack>
                    <Image src={items.image} alt={`Image of the reviewer ${items.name}`} borderRadius={"full"} objectFit="cover" w={100} h={100} />
                    <Heading size='sm' textAlign={"center"}>{items.name}</Heading>
                    <Heading size='sm' color={llOrangeColor}>{items.rating} / 5 <FontAwesomeIcon icon={faStar} /></Heading>
                    <Text textAlign={"justify"}>{items.reviewDesc}</Text>
                </VStack>
            </section>
        </CardBody>
    </Card>);
}

/*
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
                <Heading size='sm'>Order a delivery <FontAwesomeIcon icon={faMotorcycle} /></Heading>
            </CardFooter>
        </Card>
*/

export default ReviewCard;