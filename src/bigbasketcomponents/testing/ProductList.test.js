import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import Productlist from "./Productlist";
  
// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})
  
describe("Productlist Component" ,() => {
    const setToggle= jest.fn(); 
    render(<Productlist setToggle={setToggle} btnTxt="Click Me!"/>); 
    const button = screen.getByTestId("button"); 
      
    // Test 1
    test("Button Rendering", () => {
        expect(button).toBeInTheDocument(); 
    })
  
    // Test 2 
    test("Button Text", () => {
        expect(button).toHaveTextContent("Click Me!"); 
    })
})