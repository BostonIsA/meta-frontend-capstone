import { Box, Center, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Logo.svg";
import {Links} from "../Constants.js";

function Nav() {
    return (
        <nav>
            <Center>
                <HStack pt={5} spacing={8} as={"nav"} alignItems={"center"}>
                    <Box mr={50}><NavLink to="/"><img className="headerLogo" src={logo} alt="Little Lemon homepage link" /></NavLink></Box>
                    {Links.map((link) => (
                        <NavLink to={link.toLowerCase() === "home" ? "/" : link.toLowerCase()} key={link}>{link}</NavLink>
                    ))}
                </HStack>
            </Center>
        </nav>
    );
}

export default Nav;