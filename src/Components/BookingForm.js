import { Alert, AlertIcon, Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../Hooks/useSubmit";
import { useEffect, useState } from "react";
import { llGreenColor, llYellowColor } from "../Constants";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
    const { submit, response } = useSubmit();
    const navigate = useNavigate();
    const [alertVisibility, setAlertVisibility] = useState(false);

    const formik = useFormik(
        {
            initialValues: {
                date: new Date().toISOString().split('T')[0],
                time: "five",
                numGuests: 2,
                occasion: "Birthday"
            },
            onSubmit: (values) => { submit("", values) },
            validationSchema: Yup.object({
                date: "",
                time: "",
                numGuests: 0,
                occasion: ""
            })
        }
    );

    useEffect(() => {
        if (response) {
            if (response.type === "success") {
                navigate("/bookingconfirmed");
            }
            setAlertVisibility(true);
        }
    }
        // eslint-disable-next-line
        , [response]);

    return (
        <VStack mt={8}>
            { alertVisibility &&
                <Alert status="warning">
                <AlertIcon />
                There's been an error processing your request, please try again.
            </Alert>
            }
            <Heading>Table Reservation Form</Heading>
            <Box p={6} rounded="md" w="80%" borderRadius={"md"} borderColor={llGreenColor} borderWidth={2} m={4}>
                <form onSubmit={formik.handleSubmit}>
                    <VStack>
                        <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                            <FormLabel>Date: </FormLabel>
                            <Input
                                id="date"
                                name="date"
                                placeholder="Select Date and Time"
                                size="md"
                                type="date"
                                min={new Date().toISOString().split('T')[0]}
                                value={formik.values.date}
                                onChange={formik.handleChange}
                            />
                            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                            <FormLabel>Time: </FormLabel>
                            <Select id="time" name="time" {...formik.getFieldProps('time')}>
                                <option value="five">17:00</option>
                                <option value="six">18:00</option>
                                <option value="seven">19:00</option>
                                <option value="eight">20:00</option>
                                <option value="nine">21:00</option>
                                <option value="ten">22:00</option>
                            </Select>
                            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!formik.errors.numGuests && formik.touched.numGuests}>
                            <FormLabel>Number of guests: </FormLabel>
                            <NumberInput id="numGuests"
                                name="numGuests"
                                min={1} defaultValue={2} max={10} onChange={(val) => formik.setFieldValue('numGuests', val)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <FormErrorMessage>{formik.errors.numGuests}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                            <FormLabel>Occasion: </FormLabel>
                            <Select id="occasion" name="occasion" {...formik.getFieldProps('occasion')}>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </Select>
                            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                        </FormControl>

                        <Button mt={8} bg={llYellowColor} type="submit" w={"full"}>Make Your reservation</Button>
                    </VStack>
                </form>
            </Box>
        </VStack>);
}

export default BookingForm;