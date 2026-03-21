import {dividir} from "../src/dividir";
import {subtracao} from "../src/subtracao";
import {soma} from "../src/soma"
import { multiplicar } from "../src/multiplicar";


describe("Testes com soma de numeros positivos e negativos:", () => {
    test("Soma de 2 numeros positivos", () => {
        expect(soma(2,3)).toBe(5);
    })
    test("Soma de 2 numeros negativos",() => {
        expect(soma(-3,-3)).toBe(-6);
    })

    })



describe("Testes com divisão de numeros:", () => {
    test("Divisão de um numero positivo por 0 ", () => {
        expect(() => dividir(10,0)).toThrow("Divisão por 0");

    })
    test("Divisão de 2 numeros positivos", () => {
        expect(dividir(10,2)).toBe(5);
    })
    
    test("Divisão de 2 numeros negativo", () => {
            expect(dividir(-16,-2)).toBe(8);
    
    })
    
    test("Divisão por numero negativo ", () =>{
        expect(dividir(5,-2)).toBe(-2.50);
    })
    test("Divisão de um numero negativo por positivo", () => {
        expect(dividir(-5,2)).toBe(-2.50);
    })
describe("Multiplicação de numeros", () => {
    test("Mulplicação por 0", () => {
        expect(multiplicar(10,0)).toBe(0);
    })
    test("Multplicação de 2 numeros positivos", () => {
        expect(multiplicar(2,10)).toBe(20);
    })
    test("Multiplicação de 2 numeros negativos", () => {
        expect(multiplicar(-2,-20)).toBe(40);
    })
    test("Multiplicação de um numero positivo por negativo", () => {
        expect(multiplicar(2,-20)).toBe(-40);
    })
    })
describe("Testes com Subtração de numeros", () => {
    test("Subtração de numero positivos ", () => {
        expect(subtracao(20,10)).toBe(10);
    })
    test("Subtração de 2 numeros negativos", () =>{
        expect(subtracao(-10,-10)).toBe(0)
    })
    test("Subtração por 0", () => {
        expect(subtracao(10,0)).toBe(10)
    })
    //test("Subtração por 0:")
})
})