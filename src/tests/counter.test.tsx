import {render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

// test block
test("increments counter", () => {
    // render component
    render(<Counter></Counter>)

    // select elements within the component
    const incrementBtn = screen.getByTestId("increment");
    const decrementBtn = screen.getByTestId("decrement");
    const counter = screen.getByTestId("counter")

    // interact with incrementBtn
    fireEvent.click(incrementBtn)
    expect(counter.innerHTML).toBe("1")

    // interact with decrementBtn
    fireEvent.click(decrementBtn)
    expect(counter.innerHTML).toBe("0")   
})