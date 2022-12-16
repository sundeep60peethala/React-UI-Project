import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import CreateProduct from "./CreateProduct";
  
// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})
  
describe("CreateProduct Component" ,() => {
    const setToggle= jest.fn(); 
    render(<CreateProduct setToggle={setToggle} btnTxt="Click Me!"/>); 
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