import {soma} from "../src/soma";

test("Deve somar 2 numeros", () =>{
    expect(soma(2,3)).toBe(5)
});

// Arrow functions 