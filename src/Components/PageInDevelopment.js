import { Center, Heading } from "@chakra-ui/react";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { llGreenColor } from "../Constants";

function PageInDevelopment(){
    return (
    <body>
        <Center><Heading color={llGreenColor} mt={"15%"}><FontAwesomeIcon icon={faPersonDigging} /> THIS PAGE IS IN DEVELOPMENT! <FontAwesomeIcon icon={faPersonDigging} /></Heading></Center>
    </body>
    );
}

export default PageInDevelopment;