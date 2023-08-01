import { Center, Heading } from "@chakra-ui/react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { llGreenColor } from "../Constants";

function ConfirmedBooking(){
    return (
    <body>
        <Center><Heading color={llGreenColor} mt={"15%"}>Your booking has been confirmed! <FontAwesomeIcon icon={faCheckCircle} /></Heading></Center>
    </body>
    );
}

export default ConfirmedBooking;