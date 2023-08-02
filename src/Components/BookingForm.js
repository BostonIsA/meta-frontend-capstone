import { Alert, AlertDescription, AlertIcon, Box, Button, CloseButton, FormControl, FormErrorMessage, FormLabel, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../Hooks/useSubmit";
import { useEffect, useState } from "react";
import { llGreenColor, llYellowColor } from "../Constants";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ jsonData }) => {
    const { submit, response } = useSubmit();
    const [alertVisibility, setAlertVisibility] = useState(false);
    /* istanbul ignore next */ 
    const navigate = useNavigate();

    const formik = useFormik(
        {
            initialValues: {
                date: new Date().toISOString().split('T')[0],
                time: "five",
                numGuests: 2,
                occasion: "Birthday"
            },
            onSubmit: (values) => { submit("/bookingconfirmed", values) },
            validationSchema: Yup.object({
                date: Yup.date().min(new Date().toISOString().split('T')[0]).required(),
                time: Yup.string().required(),
                numGuests: Yup.number().required(),
                occasion: Yup.string().required()
            })
        }
    );

    // USING THE DUMMY 50/50 CHANCE SO CAN SEE HOW THE APP WOULD DEAL WITH AN ERROR, ON A REAL APP WE WOULD REMOVE THIS.
    useEffect(() => {
        if (response) {
            if (response.type === "success") {
                /* istanbul ignore next */ 
                navigate("/bookingconfirmed");
            }
            setAlertVisibility(true);
        }
    }
        // eslint-disable-next-line
        , [response]);

    return (
        <VStack mt={8}>
            {alertVisibility &&
                <Alert status="warning" justifyContent={"space-between"}>
                    <AlertIcon />
                    <AlertDescription>There's been an error processing your request, please try again.</AlertDescription>
                    <CloseButton onClick={() => setAlertVisibility(false)} />
                </Alert>
            }
            <Heading>Table Reservation Form</Heading>
            <Box p={6} rounded="md" w="80%" borderRadius={"md"} borderColor={llGreenColor} borderWidth={2} m={4}>
                <form onSubmit={formik.handleSubmit}>
                    <VStack>
                        <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                            <FormLabel htmlFor="date">Date: </FormLabel>
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
                            <FormLabel htmlFor="time">Time: </FormLabel>
                            <Select id="time" name="time" {...formik.getFieldProps('time')}>
                                {jsonData.times.map((d) => (<option value={d}>{d}</option>))}
                            </Select>
                            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!formik.errors.numGuests && formik.touched.numGuests}>
                            <FormLabel htmlFor="numGuests">Number of guests: </FormLabel>
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
                        <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
                            <FormLabel htmlFor="occasion">Occasion: </FormLabel>
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