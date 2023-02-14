import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import App2 from './App2'

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/Book your table/i);
    expect(headingElement).toBeInTheDocument();
})
test('Renders the element with the correct text', () => {
  render(<App2 />);
  const updateTimes = screen.getByLabelText(/update times/i);
  expect(updateTimes).toBeInTheDocument();
});