import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../Components/BookingForm";

const jsonDate = {
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

test("Renders the BookingForm heading", () => {
    render(<BookingForm jsonDate={jsonDate.times} />);
    const headingElement = screen.getByText("Table Reservation Form");
    expect(headingElement).toBeInTheDocument();
})


test("Reservation Button has appropiate text and exists", () => {
    render(<BookingForm jsonDate={jsonDate} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Make Your reservation");
})

test("User clicks on the reservation button successfully", () => {
    render(<BookingForm jsonDate={jsonDate} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
})

test("Times are fine", () => {
    render(<BookingForm jsonDate={jsonDate} />);
    expect(<BookingForm />).toHaveBeenCalled();
    const input = screen.getByRole('select', { name: 'time' });
    expect(input.length).toEqual(jsonDate.times.length);
})