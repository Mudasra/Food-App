import { sum } from "../sum.js";

test ("this function should calculate the sum of two numbers" , ()=>{
    const result = sum(3 , 5);
    // Assertion
    expect(result).toBe(8);
})