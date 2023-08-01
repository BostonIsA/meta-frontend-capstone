import { GridItem, HStack, Heading, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { Links, llGreenColor } from "../Constants";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareWhatsapp, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <SimpleGrid spacing={15} columns={4} bg={llGreenColor} w="100%" color={"white"} justifyItems={"center"} >
                <GridItem mt={8} mb={8}><Image objectFit={"contain"} boxSize="10em" src={"logo-white.png"} alt="Picture of one of the starters from Little Lemon" /></GridItem>
                <GridItem mt={8} mb={8}>
                    <Heading size='sm'>Page Links</Heading>

                        {Links.map((link) => (
                            <NavLink to={link.toLowerCase() === "home" ? "/" : link.toLowerCase()} key={link}>{link} <Spacer /></NavLink>
                        ))}

                </GridItem>
                <GridItem mt={8} mb={8}>
                    <Heading size='sm'>Contact</Heading>
                    <Text>Address - Diagonal Avenue 51st</Text>
                    <Text>Phone number - 907 555 23A </Text>
                    <Text>Email - littlelemon@contact.lemon</Text>
                </GridItem>
                <GridItem mt={8} mb={8}>
                    <Heading size='sm'>Social Media Links</Heading>
                    <HStack mt={4}>
                        <NavLink to="https://www.instagram.com/"><FontAwesomeIcon icon={faSquareInstagram} size="xl" /></NavLink>
                        <NavLink to="https://www.facebook.com/"><FontAwesomeIcon  icon={faSquareFacebook} size="xl" /></NavLink>
                        <NavLink to="https://www.pinterest.com/"><FontAwesomeIcon icon={faSquarePinterest} size="xl" /></NavLink>
                        <NavLink to="https://web.whatsapp.com/"><FontAwesomeIcon icon={faSquareWhatsapp} size="xl" /></NavLink>
                        <NavLink to="https://www.youtube.com/"><FontAwesomeIcon icon={faSquareYoutube} size="xl" /></NavLink>
                    </HStack>
                </GridItem>
            </SimpleGrid>
        </footer>
    );
}
/*
<HStack mt={8} bg={llGreenColor} w="100%" color={"white"} justifyContent={"center"} alignItems={"flex-start"}>
                    <VStack alignItems={"flex-start"}><Image objectFit={"contain"} boxSize="25em" src={"logo-white.png"} alt="Picture of one of the starters from Little Lemon" /></VStack>
                    <VStack alignItems={"flex-start"}>
                        <Heading size='sm'>Page Links</Heading>
                        {Links.map((link) => (
                            <NavLink to={link.toLowerCase() === "home" ? "/" : link.toLowerCase()} key={link}>{link}</NavLink>
                        ))}
                    </VStack>
                    <VStack alignItems={"flex-start"}>
                        <Heading size='sm'>Contact</Heading>
                        <Text>Address - Diagonal Avenue 51st</Text>
                        <Text>Phone number - 9O7 555 234 </Text>
                        <Text>Email - littlelemon@contact.lemon</Text>
                    </VStack>
                    <VStack alignItems={"flex-start"}>
                        <Heading size='sm'>Social Media Links</Heading>
                        <HStack>
                            <FontAwesomeIcon icon={faSquareInstagram} />
                            <FontAwesomeIcon icon={faSquareFacebook} />
                            <FontAwesomeIcon icon={faSquarePinterest} />
                            <FontAwesomeIcon icon={faSquareWhatsapp} />
                            <FontAwesomeIcon icon={faSquareYoutube} />
                        </HStack>
                    </VStack>
                </HStack>
*/

export default Footer;