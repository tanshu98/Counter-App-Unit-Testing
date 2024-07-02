import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Counter from "./Counter";
// import Counter from "./Counter";


describe('Counter', () => {
    it("displays the correct counter on initial render", () => {
        // Render the Counter component
        const { getByTestId } = render(<Counter />);
        
        // Select the counter element by its data-testid attribute
        const countValue = Number(getByTestId("counter").textContent);
        
        // Assert that the counter's initial text content is '0'
        expect(countValue).toEqual(0);
        // Alternatively, you can use the toHaveTextContent matcher
        // expect(getByTestId("counter")).toHaveTextContent('0');
    });
})

test('count should increment by 1, when increment button is clicked', ()=> {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment');
    const countDisplay = screen.getByTestId('count');
    // Click increment btn
    fireEvent.click(incrementBtn);
    expect(countDisplay).toHaveTextContent('Count 1');


});

test('count should decrement by 1, when decrement button is clicked',()=> {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment');
    const decrementBtn = screen.getByTestId('decrement');
    const countDisplay = screen.getByTestId('count');

    fireEvent.click(incrementBtn);
    expect(countDisplay).toHaveTextContent('Count 1');
    fireEvent.click(decrementBtn);
    expect(countDisplay).toHaveTextContent('Count 0');
    fireEvent.click(decrementBtn);
    expect(countDisplay).toHaveTextContent('Count 0');
})

test('count should be 0 when restart button is clicked', ()=> {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment');
    const restartBtn = screen.getByTestId('restart');
    const countDisplay = screen.getByTestId('count');

    fireEvent.click(incrementBtn);
    expect(countDisplay).toHaveTextContent('Count 1');

    fireEvent.click(restartBtn);
    expect(countDisplay).toHaveTextContent('Count 0');
})






















// We want to test the counter component..so first we import that..
// Starting madhe aapn describe krto..ki he particular function kaa krt ahe..
// In this case..Counter Function kaa karel..
// It => Jest offers us this method