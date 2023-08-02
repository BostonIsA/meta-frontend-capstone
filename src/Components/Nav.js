import { Box, Center, Collapse, Flex, HStack, IconButton, Stack, VStack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Logo.svg";
import { Links, llGrey } from "../Constants.js";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function Nav() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <nav>
            <Flex
                flex={{ base: 1, md: 'auto' }}
                ml={{ base: -2 }}
                display={{ base: 'flex', md: 'none' }} justifyContent={"space-between"}>
                <IconButton ml={3}
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
                <Box mr={"40%"}><NavLink to="/"><img className="headerLogo" src={logo} alt="Little Lemon homepage link" /></NavLink></Box>
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center' }}>
                <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                    <DesktopNav />
                </Flex>
            </Flex>


            <Collapse in={isOpen} animateOpacity >
                <MobileNav />
            </Collapse>
        </nav>);
}

const DesktopNav = () => {
    return (
        <Center>
            <HStack pt={5} spacing={8} as={"nav"} alignItems={"center"}>
                <Box mr={50}><NavLink to="/"><img className="headerLogo" src={logo} alt="Little Lemon homepage link" /></NavLink></Box>
                {Links.map((link) => (
                    <NavLink to={link.toLowerCase() === "home" ? "/" : link.toLowerCase()} key={link}>{link}</NavLink>
                ))}
            </HStack>
        </Center>
    );
}

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {Links.map((link) => (
                <NavLink to={link.toLowerCase() === "home" ? "/" : link.toLowerCase()} key={link}>
                    <VStack>
                        <Box w={"full"}
                            py={2}
                            as="a"
                            justifyContent="space-between"
                            alignItems="center"
                            _hover={{
                                background: llGrey,
                            }}>
                            {link}
                        </Box>
                    </VStack></NavLink>
            ))}
        </Stack>
    );
}
